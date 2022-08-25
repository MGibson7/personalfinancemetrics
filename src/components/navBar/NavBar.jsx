import { useState } from "react"
import "./navbar.css"

const NavBar = () => {
  const [age, setAge] = useState(30)
  const [disAge, setDisAge] = useState("none")
  const [retireAge, setRetireAge] = useState(65)
  const [disRetire, setDisRetire] = useState("none")



  const handleContent = (invDisplay, setInvDisplay)=>{
    if (invDisplay === "none"){

      setInvDisplay("flex")


    }
    else{
      setInvDisplay("none")

    }

  }


  return (
    <div className="main">
        <div className="navBar">
        <div className="userInfo">
            <h2>UserName</h2>
            <img src="https://www.transparentpng.com/thumb/user/black-username-png-icon-free--4jlZLb.png" alt="" />
            <div className="age">
            <h3>Age:</h3>
            <h3 className="ageChange" style={{'display': disAge}}><input type="number" min = "0" max = "90" onChange={(e)=>setAge(e.target.value)} /></h3>
          <h3 className  = "curDash" onClick={()=>{handleContent(disAge, setDisAge)}}>{age}</h3>
        </div>
       
        <div className="retirement">
            <h3>Retirement Age:</h3>
            <h3 className="ageChange" style={{'display': disRetire}}><input type="number" min = "0" max = "90" onChange={(e)=>setRetireAge(e.target.value)} /></h3>
          <h3 className  = "curDash" onClick={()=>{handleContent(disRetire, setDisRetire)}}>{retireAge}</h3>
            

        </div>
        <div className="date">
            <h3>Date:</h3>

            <h3>8/23/2022</h3>

        </div>
        </div>
        

        </div>
        

    </div>
  )
}

export default NavBar