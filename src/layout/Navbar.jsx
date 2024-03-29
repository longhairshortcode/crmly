import style from "./Navbar.module.css"
import myLogo from "../assets/myLogo.png"
import { NavLink } from "react-router-dom"
import { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
// import react-icon here

function Navbar() {

const [showLinks, setShowLinks] = useState(false);

const toggleLinks = () => {
  setShowLinks(!showLinks);
}

const closeLinkMenu = () => {
  setShowLinks(false)
}

  return (
    <nav className={style.container}>

      <div className={style.containerLogo}>
        <img className={style.leftLogo} src={myLogo} alt="company logo"></img>
      </div>
      
      <div className={`${style['rightLinks']} ${showLinks ? style['showLinks'] : ""}`}>
            <NavLink to="/grid" onClick={closeLinkMenu}>Grid</NavLink>
            <NavLink to="/signup2" onClick={closeLinkMenu}>Sign Up 2</NavLink>
            <NavLink to="/signupform3" onClick={closeLinkMenu}>SignUp Form3</NavLink>
            <NavLink to="/prices" onClick={closeLinkMenu}>Pricing</NavLink>
            <NavLink to="/sf3" onClick={closeLinkMenu}>Integration</NavLink>
            <NavLink to="/yourresults" onClick={closeLinkMenu}>Your Results</NavLink>
            <NavLink to="/yourresults2" onClick={closeLinkMenu}>Your Results 2</NavLink>
            <NavLink to="/signup" className={style.getStartedButton} onClick={closeLinkMenu}>Get Started</NavLink>
            <NavLink to="/apireq" className={style.apiReq} onClick={closeLinkMenu}>APIReq</NavLink>
      </div>


      <div className={style.burgerIcon} onClick={toggleLinks}>
        {showLinks ? <AiOutlineClose size={15}/> : <HiMenu size={15} />} 
      </div>  
    
    </nav>
  )
}

export default Navbar
