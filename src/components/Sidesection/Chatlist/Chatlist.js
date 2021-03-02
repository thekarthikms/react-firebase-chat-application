import './Chatlist.css'
import Chat from './Chat'
import crowd from '../../../assets/crowd.png'
import {connect} from 'react-redux'
import { useEffect, useState } from 'react'
import { UserRef } from '../../../firebase/firebase'
import { chatlistSet } from '../../../redux/actions/chatlist_action'
let Chatlist =(props)=>{
    // let [listState,setListState] = useState(false)
    let [chatList,setChatList] =useState([])
    console.log(props.userlog)
    console.log(props.chatlist.chatlist)
    console.log("props from chat list ",)
   

    useEffect(()=>{
        UserRef.doc(props.userlog.user.userid).get().then(doc=>{
            let friends = doc.data().friends
            if(friends.length !== 0){
                // setListState(true)
                props.setChat()
                console.log(friends.length)
                let chats =[]
                for(let i=0;i<friends.length;i++){
                    console.log(friends[i])
                    
                    chats.push(
                        <Chat key={i} friendname={friends[i]}/>
                    )
                }
                setChatList(chats)
            }
        })
        
    },[props.chatlist.listToggle])
    return (
        <div className="chats">
            <p className="p_title">Conversations</p>
            {props.chatlist.chatlist?
            <>
                
                {chatList}
            </>
            :<div className="img-contain">
                <img src={crowd} alt=""/>
                <p>Start a new chat</p>
            </div>}
        </div>
    )
}

let mapStateToProps = state =>{
    return state
}

let mapDispatchToProps = dispatch =>{
    return {
        setChat:()=>{dispatch(chatlistSet())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chatlist)