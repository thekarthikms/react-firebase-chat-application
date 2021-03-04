import './Profile.css'
import { UserRef } from '../../../firebase/firebase'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { userlogout } from "../../../redux/actions/userlog_action";
import { useHistory } from 'react-router-dom';
import {unselectChat} from '../../../redux/actions/chatselect_action'
import {clrMsg} from '../../../redux/actions/messages_action'
let Profile = (props) =>{
    let [usrName,setName]=useState('')
    let history = useHistory()
    let handleClick=() =>{
        props.logout()
        history.push('/login')
        
    }
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
        logout:()=>{
            dispatch(userlogout())
            dispatch(unselectChat())
            dispatch(clrMsg())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)