import "./CSS/Profile.css"
import genericProfilePic from "../assets/images/genericProfilePic.png"
export default function Profile() {
  // Need frame
  return (

    <>
      <div>
        <img src={genericProfilePic} className="Profile_ProfilePic"/>
      </div>
    </>
  )
}