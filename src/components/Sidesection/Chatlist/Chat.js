import { useState,useEffect } from 'react'
import './Chatlist.css'
import { connect } from 'react-redux'
import {selectChat} from '../../../redux/actions/chatselect_action'
import { UserRef,ChatRef } from '../../../firebase/firebase'
import {msgTog} from '../../../redux/actions/messagelist_action'
import { setMsg } from "../../../redux/actions/messages_action";
let Chat =(props)=>{
    let [active,setActive]=useState("not-active")
    useEffect(()=>{
        if(props.userlog.user.username){
            setActive('active')
        }
    },[])
    let handleClick =() =>{
        UserRef.where("username","==",props.friendname).get().then(users=>{
            users.forEach(user=>{
                props.chatSel(props.friendname,`${user.id}`)
            })
        })
        if(props.chatselect.user.username){
            UserRef.doc(props.userlog.user.userid).get().then(user=>{
                console.log('from chat message users',user.data())
                
                    let userChats = user.data().chats[props.chatselect.user.username]
                    let msgList =[]
                    userChats.forEach(chat=>{
                        
                        ChatRef.doc(`${chat}`).get().then(message=>{
                            console.log(message.data().message)
                            msgList.push(message.data().message)
                            console.log(msgList,"from chat")
                        })
                        console.log("from chat",msgList)
                        UserRef.doc(props.chatselect.user.userid).get().then(user=>{
                            let UserChats = user.data().chats[props.userlog.user.username]
                            UserChats.forEach(chat=>{
                                ChatRef.doc(`${chat}`).get().then(message=>{
                                    msgList.push(message.data().message)
                                })
                            })
                            props.setmessage(msgList)
                        })



                        
                    })
                    
              
            })
        }
        props.messagetog()
    }
    return(
        <div className="chat" id={active} onClick={handleClick}>
                <div className="prof-icon">

                </div>
                <div className="prof-details">
                    <p className="p_title">{props.friendname}</p>
                    <p className="p_msg">props</p>
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
        setmessage:(message)=>{dispatch(setMsg(message))}
    }
}

export default connect(mapPropsToState,mapDispatchToProps)(Chat)