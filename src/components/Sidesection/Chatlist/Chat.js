import { useState,useEffect } from 'react'
import './Chatlist.css'
import { connect } from 'react-redux'
import {selectChat} from '../../../redux/actions/chatselect_action'
import { UserRef,ChatRef } from '../../../firebase/firebase'
import {msgTog} from '../../../redux/actions/messagelist_action'
import { setMsg,clrMsg } from "../../../redux/actions/messages_action";
let Chat =(props)=>{
    let [active,setActive]=useState("not-active")
    let [message,setm] = useState('')
    useEffect(()=>{
        let messages =props.messages.messages
       if(messages.length !== 0){
            if(props.friendname === props.chatselect.user.username){
                
        let len = messages.length
        let message = messages[len-1][0]
        setm(message)
            }
        
       }
    },[props.messagelist.messageListToggle])

    useEffect(()=>{
        if(props.userlog.user.username){
            setActive('active')
        }
        
    },[]);
    
    let handleClick =() =>{
        // UserRef.where("username","==",props.friendname).get().then(users=>{
        //     users.forEach(user=>{
        //         console.log(props.friendname,"friend")
        //         props.chatSel(props.friendname,`${user.id}`)
        //         console.log(props.chatselect.user.username,"chat")
        //         props.clearmessage()
        //         props.messagetog()
        //         if(props.chatselect.user.username === props.friendname){
        //             props.clearmessage()
        //             UserRef.doc(props.userlog.user.userid).get().then(user=>{
        //                     let userChats = user.data().chats[props.chatselect.user.username]
        //                     let msgList =[]
        //                     userChats.forEach(chat=>{
        //                         ChatRef.doc(`${chat}`).get().then(message=>{
        //                             msgList.push(message.data().message)
        //                         })
        //                         props.setmessage(msgList)
        //                         props.messagetog()
        //                         UserRef.doc(props.chatselect.user.userid).get().then(user=>{
        //                             let UserChats = user.data().chats[props.userlog.user.username]
        //                             UserChats.forEach(chat=>{
        //                                 ChatRef.doc(`${chat}`).get().then(message=>{
        //                                     msgList.push(message.data().message)
        //                                     // console.log("chat sel from bottom ",props.chatselect.user.username)    
        //                                 })
        //                                 console.log(msgList,"from message list fetched")
        //                                     props.setmessage(msgList)
        //                                     props.messagetog()
        //                             })
                                    
                                    
        //                         })  
        //                     })
        //             })
        //         }
        //     })
        //     // props.messagetog()
        // })
        fetchChat().then(result=>{
            props.messagetog()
        })
      
        
    }

    let fetchChat = async ()=>{
        
        let ChatUsers = await UserRef.where("username", "==",props.friendname).get()
        let ChatUser
        ChatUsers.forEach(user=>{
            ChatUser = user
        })
        let msgList = []
        

        let CurrentUser = await UserRef.doc(props.userlog.user.userid).get()
        let CurrentUserList = CurrentUser.data().chats[ChatUser.data().username]
        CurrentUserList.forEach(async (chat)=>{
            let ChatMessage  = await ChatRef.doc(`${chat}`).get()
            let date = ChatMessage.data().timestamp.toDate()
            
            msgList.push([ChatMessage.data().message,date,CurrentUser.data().username,ChatMessage.id])
        })
        let ChatUserList = ChatUser.data().chats[CurrentUser.data().username]
        ChatUserList.forEach(async (chat)=>{
            let ChatMessage = await ChatRef.doc(`${chat}`).get()
            let date = ChatMessage.data().timestamp.toDate()
            msgList.push([ChatMessage.data().message,date,ChatUser.data().username,ChatMessage.id])
        })
        props.chatSel(`${ChatUser.data().username}`,`${ChatUser.id}`)
        props.setmessage(msgList)
       
        return msgList
    }

    return(
        <div className="chat" id={active} onClick={handleClick}>
                <div className="prof-icon">

                </div>
                <div className="prof-details">
                    <p className="p_title">{props.friendname}</p>
                    <p className="p_msg">{message}</p>
                </div>
        </div>
    )
}

let mapPropsToState = state =>{
    return state
}

let mapDispatchToProps = dispatch =>{
    return{
        chatSel:(username,userid)=>{dispatch(selectChat(username,userid))},
        messagetog:()=>{dispatch(msgTog())},
        setmessage:(message)=>{dispatch(setMsg(message))},
        clearmessage:()=>{dispatch(clrMsg())}
    }
}

export default connect(mapPropsToState,mapDispatchToProps)(Chat)