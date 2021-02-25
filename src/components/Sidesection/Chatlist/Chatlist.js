import './Chatlist.css'
import Chat from './Chat'
let Chatlist =()=>{
    return (
        <div className="chats">
            <p className="p_title">Conversations</p>
            <Chat active="active"/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
        </div>
    )
}

export default Chatlist