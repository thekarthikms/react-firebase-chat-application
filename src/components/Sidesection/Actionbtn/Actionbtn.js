import {useRef, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faPlus, faTimes} from '@fortawesome/free-solid-svg-icons'
import './Actionbtn.css'
import {UserRef} from '../../../firebase/firebase'
import { connect } from 'react-redux'
import firebase from 'firebase/firebase'

let Actionbtn = (props)=>{
    const plus = <FontAwesomeIcon icon={faPlus} />
    const close = <FontAwesomeIcon icon={faTimes}/>
    const modRef = useRef()
    const inputRef = useRef()
    const searchRef = useRef()
    const errRef = useRef()
    let [res,setRes]=useState("")
    const showModal =()=>{
        modRef.current.style.display = "flex"
    }
    const closeModal = ()=>{
        modRef.current.style.display = "none"
    }
    const searchUsr = ()=>{
        let searchUname = inputRef.current.value
        UserRef.where('username','==',searchUname).get().then(users=>{
            
            let userslist = []
            users.forEach(user => {
                
                console.log(user)
                userslist.push(user.data().username)
            });
            if(userslist.length!==0){
                setRes(userslist[0])
                searchRef.current.style.display = "flex"
            }

        })
        if(inputRef.current.value === ""){
           errRef.current.style.display = "none"
        searchRef.current.style.display = "none"
        }
        
        
    }


    let handleClick = ()=>{
        UserRef.doc(props.userlog.user.userid).update({
            friends:firebase.firestore.FieldValue.arrayUnion(res)
        })
    }
    return (
        <div className="action-section">
            <div className="add-user">
                <button onClick={showModal} className="actn-btn">
                    {plus}
                </button>
            </div>

            {/* <!-- The Modal --> */}
            <div ref={modRef} className="modal">
            {/* <!-- Modal content --> */}
                <div className="modal-content">
                    <div className="close" onClick={closeModal }>{close}</div>
                    <div className="form">
                        <input className="search-input" type="text" ref={inputRef} onChange={searchUsr} placeholder="Enter username"/>
                       
                    </div>
                    <div className="search-res" ref={searchRef}>
                        <div><p>{res}</p></div>
                        <button className="actn-btn" onClick={handleClick}>
                            Add Friend
                        </button>
                    </div>
                    <div className="err-res" ref={errRef}>
                       <p>No Users Found</p>
                       
                    </div>
                </div>

            </div>

        </div>
    )
}

let mapStateToProps = state =>{
    return state
}

export default connect(mapStateToProps,null)(Actionbtn)