import './Chatmessage.css'
import Sendmsg from './Sendmsg'
import Recemsg from './Recemsg'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { ChatRef, UserRef } from '../../../firebase/firebase'

let Chatmessage = (props) =>{

    let [messageList,setMessages] = useState()
    useEffect(()=>{
            getMessage()
            
       
    },[props.messagelist.messageListToggle])

    let getMessage = async () =>{
        let messages = props.messages.messages
        setTimeout(() => {
            let temps=[]
            let newmm = messages.sort((a,b)=>{
                return a[1]-b[1]
            })
            for(let i=0;i<newmm.length;i++){
                let time=newmm[i][1].toLocaleString()
                if(newmm[i][2]===props.userlog.user.username){
                   
                    temps.push(
                        <Sendmsg key={i} msg={newmm[i][0]} time={time}/>
                    )
                }
                else{
                    temps.push(
                        <Recemsg key={i} msg={newmm[i][0]} time={time}/>
                    )
                }
               
            }

            // messages.forEach(message=>{
            //     console.log(message)
            //     temps.push(
            //         <Sendmsg msg={message} />
            //     )
            // })
            setMessages(temps)
        }, 1000);
    }

    return (
        <div className="message-container">
            {/* <Sendmsg msg="Hai" />
            <Recemsg msg="Hello"/>
            <Sendmsg msg="How are u ?" />
            <Recemsg msg="Fine. Thanks"/> */}
            
            {messageList}
        </div>
    )
}

let mapStateToProps = state =>{
    return state
}

export default connect(mapStateToProps,null)(Chatmessage)