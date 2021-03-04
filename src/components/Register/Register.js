import './Register.css';
import { Link, useHistory } from "react-router-dom";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon}   from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux'
import {UserRef} from '../../firebase/firebase'
import { useRef } from 'react';

let Register = (props)=>{
    let history = useHistory()
    let username = useRef()
    let password = useRef()
    let handleClick =()=>{
        if(username.current.value !=='' && password.current.value !==''){
            let postData = {
                username:username.current.value,
                password:password.current.value,
                friends:[],
                chats:{}
            }
            UserRef.add(postData)
            history.push('/login')
        }
    }
    return (
        <div className="reg-container">
            <div className="form">
            <div className="route-login">
                    <span><Link className="links" to="/" > <FontAwesomeIcon icon={faAngleLeft} /> Back</Link></span>
                </div>
                
                <input className="reg-input reg" ref={username}type="text" placeholder="User Name"/> 
                <input className="reg-input reg" ref={password} type="password" placeholder="Password"/>
                <button className ="reg-btn reg" onClick={handleClick} >Register</button>
                <div className="route-login">
                    <span>Already as user?  <Link className="links" to="/Login" >Login</Link></span>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = state =>{
    return state
}

let mapDispatchToProps = dispatch =>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)