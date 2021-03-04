import './Chatsection.css'
import Chatbar from './Chatbar/Chatbar'
import Chatmessage from "./Chatmessage/Chatmessage";
import crowd from '../../assets/crowd.png'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { UserRef,ChatRef } from "../../firebase/firebase";
import { setMsg,clrMsg } from '../../redux/actions/messages_action';
import {msgTog} from '../../redux/actions/messagelist_action'


let Chatsection = (props)=>{
    let chat = props.chatselect.active
    useEffect(()=>{
    //  if(props.chatselect.user.username){
    //     fetchChat()
        
    //  }
        
    },[props.messagelist.messageListToggle])

    // let fetchChat = ()=>{
       
    //     UserRef.doc(props.chatselect.user.userid).onSnapshot((snap)=>{
    //         let messages = props.messages.messages
    //         let CurrentUserList = snap.data().chats[props.userlog.user.username]
    //         let i=0
    //         CurrentUserList.forEach(async (chat)=>{
    //             let ChatMessage  = await ChatRef.doc(`${chat}`).get()
    //             let date = ChatMessage.data().timestamp.toDate()
    //             let msg = [ChatMessage.data().message,snap.data().username,ChatMessage.id]
              
               
    //         })
            
    //     })
       
      
    //     let ChatUserList = ChatUser.data().chats[CurrentUser.data().username]
    //     ChatUserList.forEach(async (chat)=>{
    //         let ChatMessage = await ChatRef.doc(`${chat}`).get()
    //         let date = ChatMessage.data().timestamp.toDate()
    //         msgList.push([ChatMessage.data().message,date,ChatUser.data().username])
    //     })
    //     props.chatSel(`${ChatUser.data().username}`,`${ChatUser.id}`)
    //     props.setmessage(msgList)
       
    // }
    return (
        <div className="chat-section-container">
            {chat
            ?
            <>
            <Chatmessage/>
            <Chatbar/>
            </>
            :<div className="img-container">
                <img src={crowd} alt=""/>
                <p>Start a Conversation</p>
            </div>
            }
        </div>
    )
}

let mapStateToProps = state =>{
    return state
}

let mapDispatchToProps = dispatch =>{
    return {
        messagetog:()=>{dispatch(msgTog())},
        setmessage:(message)=>{dispatch(setMsg(message))},
        clearmessage:()=>{dispatch(clrMsg())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chatsection)