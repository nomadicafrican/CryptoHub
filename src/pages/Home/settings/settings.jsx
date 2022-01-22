import "./settings.css"
import SideBar from "../../../../src/components/sidebar/SideBar"

export default function Settings () {
    return (
        <div className="settings">
            <div className="settingsWrapper"></div>
            <div className="settingsTitle">
            <span className="settingsUpdateTitle"></span>
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
            <form className="settingsForm">
              <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="https://i.pinimg.com/originals/cd/19/37/cd1937bae6e4752dc7ed99f9b39c066a.jpg" alt="" />
                <label htmlFor="fileInput">
                <i classname="settingsPPIcon fas fa-user-circle"></i>
                  </label>      
                  <input type="file" id="fileInput" style={{display:"none"}} />     
            </div>
            <label>Username</label>
            <input type="text" placeholder="Johnny" />
            <label>Email</label>
            <input type="text" placeholder="johnny@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
            </form>


            </div>
            <SideBar/>
        </div>

    )
  }