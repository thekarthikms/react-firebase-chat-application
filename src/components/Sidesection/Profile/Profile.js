import './Profile.css'
import {UserRef} from '../../../firebase/firebase'
import { useEffect, useState } from 'react'

let Profile = () =>{
    let [usrName,setName]=useState('')
 
    useEffect(()=>{
        UserRef.get().then((docs)=>{
            docs.forEach((doc)=>{
                setName(doc.data().username)
                console.log(doc.data().username)
            })
        })
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
          <button className="btn">Logout</button>
        </div>
    )
}

export default Profile