import { useState,useEffect } from 'react'
import './Chatlist.css'
import { connect } from 'react-redux'
let Chat =(props)=>{
    let [active,setActive]=useState("not-active")
    useEffect(()=>{
        if(props.userlog.user.username){
            setActive('active')
        }
    },[])
    return(
        <div className="chat" id={active}>
                <div className="prof-icon">

                </div>
                <div className="prof-details">
                    <p className="p_title">{props.friendname}</p>
                    <p className="p_msg">props</p>
                </div>
        </div>
    )
}

let mapPropsToState = state =>{
    return state
}

export default connect(mapPropsToState,null)(Chat)