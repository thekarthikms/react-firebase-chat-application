import './Chatlist.css'
import Chat from './Chat'
import crowd from '../../../assets/crowd.png'
import {connect} from 'react-redux'
import { useEffect, useState } from 'react'
import { UserRef } from '../../../firebase/firebase'
let Chatlist =(props)=>{
    let [listState,setListState] = useState(false)
    let [chatList,setChatList] =useState([])
    console.log(props.userlog)

    useEffect(()=>{
        UserRef.doc(props.userlog.user.userid).get().then(doc=>{
            let friends = doc.data().friends
            if(friends.length !== 0){
                setListState(true)
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
        
    },[])
    return (
        <div className="chats">
            <p className="p_title">Conversations</p>
            {listState?
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

export default connect(mapStateToProps,null)(Chatlist)