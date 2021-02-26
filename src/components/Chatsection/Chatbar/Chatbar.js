import './Chatbar.css'

let Chatbar = () =>{
    return (
        <div className="chat-bar">
            <input className="chat-input" type="text"/>
            <button className="chat-send">Send</button>
        </div>
    )
}

export default Chatbar