import './Register.css';
import { Link } from "react-router-dom";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon}   from "@fortawesome/react-fontawesome";

let Register = ()=>{
    return (
        <div className="reg-container">
            <div className="form">
            <div className="route-login">
                    <span><Link className="links" to="/" > <FontAwesomeIcon icon={faAngleLeft} /> Back</Link></span>
                </div>
                
                <input className="reg-input reg" type="text" placeholder="User Name"/> 
                <input className="reg-input reg" type="password" placeholder="Password"/>
                <button className ="reg-btn reg" >Register</button>
                <div className="route-login">
                    <span>Already as user?  <Link className="links" to="/Login" >Login</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Register