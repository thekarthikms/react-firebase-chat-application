import { useRef } from 'react'
import { connect } from 'react-redux'
import { ChatRef, UserRef } from '../../../firebase/firebase'
import firebase from 'firebase/firebase'
import './Chatbar.css'
import { msgTog } from '../../../redux/actions/messagelist_action'
let Chatbar = (props) =>{
    let sendRef = useRef()
    let handleClick =()=>{
        let sendMsg = sendRef.current.value
        let sendUser = props.userlog.user.userid
        let uid = props.chatselect.user.username
        let uniqId = ChatRef.doc()
        let chatObject = {
            id:uniqId.id,
            message:sendMsg,
            timestamp:firebase.firestore.Timestamp.fromDate(new Date())
        }
        uniqId.set(chatObject)
        UserRef.doc(sendUser).update({
            
                [`chats.${uid}`]:firebase.firestore.FieldValue.arrayUnion(uniqId.id)
            
        })
       sendRef.current.value=""
       props.messagetog()
    }
    return (
        <div className="chat-bar">
            <input className="chat-input" ref={sendRef} type="text"/>
            <button className="chat-send" onClick={handleClick}>Send</button>
        </div>
    )
}

let mapStateToProps = (state)=>{
    return state
}

let mapDispatchToProps = dispatch =>{
    return{
        messagetog:()=>{dispatch(msgTog())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chatbar)