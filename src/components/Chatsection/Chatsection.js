import './Chatsection.css'
import Chatbar from './Chatbar/Chatbar'
import Chatmessage from "./Chatmessage/Chatmessage";
import crowd from '../../assets/crowd.png'

let Chatsection = ()=>{
    let chat = false
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

export default Chatsection