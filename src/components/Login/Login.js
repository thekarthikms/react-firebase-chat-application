import './Login.css'
import {Link} from 'react-router-dom'
import { faAngleLeft  } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon}   from "@fortawesome/react-fontawesome";

let Login = () =>{
    return (
        <div className="log-container">
                <div className="form">
                <div className="route-login">
                    <span><Link className="links" to="/" > <FontAwesomeIcon icon={faAngleLeft} /> Back</Link></span>
                </div>
                <input className="log-input log" type="text" placeholder="User Name"/>
                <input className="log-input log" type="password" placeholder="Password"/>
                <button className ="log-btn log" >Login</button>
                <div className="route-login">
                    <span>New user?  <Link className="links" to="/Register" >Register</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Login