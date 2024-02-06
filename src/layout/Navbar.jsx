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

  return (
    <nav className={style.container}>

      <div className={style.containerLogo}>
        <img className={style.leftLogo} src={myLogo} alt="company logo"></img>
      </div>
      
      <div className={`${style['rightLinks']} ${showLinks ? style['showLinks'] : ""}`}>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/prices">Prices</NavLink>
            <NavLink to="/integration">Integration</NavLink>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/createAccount" className={style.getStartedButton}>Get Started</NavLink>
      </div>


      <div className={style.burgerIcon} onClick={toggleLinks}>
        {showLinks ? <AiOutlineClose/> : <HiMenu />} 
      </div>  
    
    </nav>
  )
}

export default Navbar
