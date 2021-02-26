import { Link } from "react-router-dom";

let Firstview = () => {
    return (
        <div className="reg-container">
             <div className="route-login">
                    <span><Link className="links" to="/Register" >Register</Link></span>
                </div>
                <p>or</p>
                <div className="route-login">
                    <span><Link className="links" to="/Login" >Login</Link></span>
                </div>
        </div>
    )
}

export default Firstview