import {useRef, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faPlus, faTimes} from '@fortawesome/free-solid-svg-icons'
import './Actionbtn.css'


let Actionbtn = ()=>{
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
        setRes(inputRef.current.value)
        if(inputRef.current.value === ""){
            errRef.current.style.display = "none"
        searchRef.current.style.display = "none"
        }else{
            errRef.current.style.display = "flex"
        searchRef.current.style.display = "flex"
        }
        
        setRes(inputRef.current.value)
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
                        <button className="actn-btn" onClick={searchUsr}>
                            Search User Name
                        </button>
                    </div>
                    <div className="search-res" ref={searchRef}>
                        {res}
                    </div>
                    <div className="err-res" ref={errRef}>
                        {res}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Actionbtn