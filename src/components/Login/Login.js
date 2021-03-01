import './Login.css'
import {Link} from 'react-router-dom'
import { faAngleLeft  } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon}   from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { useState,useEffect, useRef } from 'react';
import {userlogin } from '../../redux/actions/userlog_action'
import {useHistory} from 'react-router-dom'
import {UserRef} from '../../firebase/firebase'
let Login = (props) =>{
    let history = useHistory()
    let username = useRef()
    let password = useRef()
    
    let [useClick,setClick] = useState(false)
    console.log("from login",props.userlog)
    let handleClick = ()=>{
        setClick(true)
       
    }

    useEffect(()=>{
        if(useClick){
            let uname = username.current.value
            let upwd = password.current.value
           let user= UserRef.where('username','==',uname).get()
           user.then(users=>{
                users.forEach(user => {
                    if(user.data().username === uname && user.data().password === upwd){
                        
                        props.login(uname,user.id)
                        history.push('/chats')
                    }
                });
                
                
            })
           setClick(false)
        }
    },[useClick])

    return (
        <div className="log-container">
                <div className="form">
                <div className="route-login">
                    <span><Link className="links" to="/" > <FontAwesomeIcon icon={faAngleLeft} /> Back</Link></span>
                </div>
                <input className="log-input log" ref={username} type="text" placeholder="User Name"/>
                <input className="log-input log" ref={password}type="password" placeholder="Password"/>
                <button className ="log-btn log" onClick={handleClick} >Login</button>
                <div className="route-login">
                    <span>New user?  <Link className="links" to="/Register" >Register</Link></span>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = state =>{
    return state
}

let mapDispatchToProps = dispatch =>{
    return{
        login:(username,userid)=>{dispatch(userlogin(username,userid))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)