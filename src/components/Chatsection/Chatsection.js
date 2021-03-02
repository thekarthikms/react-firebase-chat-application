import './Chatsection.css'
import Chatbar from './Chatbar/Chatbar'
import Chatmessage from "./Chatmessage/Chatmessage";
import crowd from '../../assets/crowd.png'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { UserRef,ChatRef } from "../../firebase/firebase";
import { setMsg } from '../../redux/actions/messages_action';

let Chatsection = (props)=>{
    let chat = props.chatselect.active
    useEffect(()=>{
        
    },[props.chatselect])
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
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chatsection)