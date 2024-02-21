import style from "./SignupForm3.module.css"
import {useState} from "react"
import axios from "axios"

function SignUpForm3() {

  const [userData, setUserData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
  })
 
  function handleChange(e){
    const {name, value} = e.target
    setUserData(prev=>({...prev, [name]: value}))
  }


  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      await axios.post("api endpoint", {data})
    }catch(error){
      console.log(error)
    }
  }

  //   function handleSubmit(e){
  //  e.preventDefault() 
  // }
  
  return (
    <div className={style.componentContainer}>
      <form onSubmit={handleSubmit} className={style.form1}>
        <input 
          className={style.firstName} 
          type="text" 
          name="firstName" 
          value={userData.firstName} 
          onChange={handleChange} 
          required 
          placeholder="First Name">
        </input>
        <input 
          className={style.middleName} 
          type="text" 
          name="middleName" 
          value={userData.middleName} 
          onChange={handleChange} 
          required 
          placeholder="middle Name">
        </input>
        <input 
          className={style.lasttName} 
          type="text" 
          name="lastName" 
          value={userData.lastName} 
          onChange={handleChange} 
          required 
          placeholder="Last Name">
        </input>
        <button type="submit" className={style.submitBut}>Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm3
