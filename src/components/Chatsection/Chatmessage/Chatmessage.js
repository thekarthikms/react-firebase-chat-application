import './Chatmessage.css'
import Sendmsg from './Sendmsg'
import Recemsg from './Recemsg'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { ChatRef, UserRef } from '../../../firebase/firebase'

let Chatmessage = (props) =>{

    let [messageList,setMessages] = useState()
    useEffect(()=>{
        console.log("from chatmessageee",props.messages)
        if(props.messages.isMessage){
            let messages = props.messages.messages
            console.log(messages)
            let temps= []
            messages.forEach(message => {
               temps.push( <Sendmsg msg={message} />)
            });
            setMessages(temps)
        }
    },[props.messagelist.messageListToggle])

    return (
        <div className="message-container">
            {/* <Sendmsg msg="Hai" />
            <Recemsg msg="Hello"/>
            <Sendmsg msg="How are u ?" />
            <Recemsg msg="Fine. Thanks"/> */}
            {console.log(messageList)}
            {messageList}
        </div>
    )
}

let mapStateToProps = state =>{
    return state
}

export default connect(mapStateToProps,null)(Chatmessage)