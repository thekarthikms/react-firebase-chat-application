import './Chatlist.css'
import Chat from './Chat'
import crowd from '../../../assets/crowd.png'
let Chatlist =()=>{
    let list = false
    return (
        <div className="chats">
            <p className="p_title">Conversations</p>
            {list?
            <>
                <Chat active="active"/>
                <Chat/>
            </>
            :<div className="img-contain">
                <img src={crowd} alt=""/>
                <p>Start a new chat</p>
            </div>}
        </div>
    )
}

export default Chatlist