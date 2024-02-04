import style from "./Navbar.module.css"
import myLogo from "../assets/myLogo.png"
import { NavLink } from "react-router-dom"

// import react-icon here

function Navbar() {
  return (
    <nav className={style.container}>

      <div className={style.containerLogo}>
        <img className={style.leftLogo} src={myLogo} alt="company logo"></img>
      </div>
      
      <div className={style.rightLinks}>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/prices">Prices</NavLink>
            <NavLink to="/integration">Integration</NavLink>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/createAccount" className={style.getStartedButton}>Get Started</NavLink>
      </div>
    
    </nav>
  )
}

export default Navbar
