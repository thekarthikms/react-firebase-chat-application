import './Profile.css'

let Profile = () =>{
    return (
        <div className="profile">
            <div className="profile-details">
            <div className="profile-icon">

            </div>
            <div className="details">
                    <p>Eren Jaegar</p>
                    <p>@attack_titan</p>
                </div>
            </div>
          <button className="btn">Logout</button>
        </div>
    )
}

export default Profile