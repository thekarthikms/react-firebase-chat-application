import './Profile.css'
import { UserRef } from '../../../firebase/firebase'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { userlogout } from "../../../redux/actions/userlog_action";
import { useHistory } from 'react-router-dom';
let Profile = (props) =>{
    let [usrName,setName]=useState('')
    let history = useHistory()
    let handleClick=() =>{
        props.logout()
        history.push('/login')
        
    }
    console.log('from profile',props.userlog)
    useEffect(()=>{
        setName(props.userlog.user.username)
    },[])
    return (
        <div className="profile">
            <div className="profile-details">
            <div className="profile-icon">

            </div>
            <div className="details">
                    <p>{usrName}</p>
                    <p>@{usrName}</p>
                </div>
            </div>
          <button className="btn" onClick={handleClick}>Logout</button>
        </div>
    )
}

let mapStateToProps = state =>{
    return state
}

let mapDispatchToProps = dispatch =>{
    return{
        logout:()=>{dispatch(userlogout())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)