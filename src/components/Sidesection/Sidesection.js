import './Sidesection.css'
import Profile from './Profile/Profile'
import Chatlist from './Chatlist/Chatlist'
import Navbar from './Navbar/Navbar'
import Actionbtn from './Actionbtn/Actionbtn'

let Sidesection = ()=>{
    return (
        <div className="side-section-container">
            <Navbar/>
            <Profile/>
            <Chatlist/>
            <Actionbtn/>
        </div>
    )
}

export default Sidesection