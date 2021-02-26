import './Chatmessage.css'
import Sendmsg from './Sendmsg'
import Recemsg from './Recemsg'

let Chatmessage = () =>{
    return (
        <div className="message-container">
            <Sendmsg msg="Hai" />
            <Recemsg msg="Hello"/>
            <Sendmsg msg="How are u ?" />
            <Recemsg msg="Fine. Thanks"/>
        </div>
    )
}

export default Chatmessage