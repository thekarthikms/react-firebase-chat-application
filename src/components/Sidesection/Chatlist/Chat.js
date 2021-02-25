import './Chatlist.css'

let Chat =(props)=>{
    return(
        <div className="chat" id={props.active}>
                <div className="prof-icon">

                </div>
                <div className="prof-details">
                    <p className="p_title">Levi Ackermann</p>
                    <p className="p_msg">Eren Jaegarrrrrrrrrr....!!!!!!!!!</p>
                </div>
        </div>
    )
}

export default Chat