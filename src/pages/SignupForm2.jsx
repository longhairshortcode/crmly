import style from "./SignupForm2.module.css"
import { useState } from "react"



function SignupForm2() {
  
    function handleSubmit(e){
        e.preventDefault()
    }

    const [firstName, setFirstName] = useState("") 
    const [lastName, setLastName] = useState("")
    const [practiceName, setPracticeName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [tel, setTel] = useState("")
    const [url, setUrl] = useState("")
    const [selectPlan, setSelectPlan] = useState("")
    const [homeAddr, setHomeAddr] = useState("")
    const [comment, setComment] = useState("") 

  return (
    <div className={style.container}>
      <form className={style.containerForm} onSubmit={handleSubmit}>
        <h2 className={style.formH2}>Tell us about you</h2> 
        <div className={style.containerOfBothForms}>
        <div className={style.formLeft}>
          <div className={style.firstLastContainer}>
            <input className={style.firstName}  type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required placeholder="First Name&lowast;"/>
            <input className={style.lastName} type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required placeholder="Last Name&lowast;"/>    
          </div>
            <input className={style.practiceName} type="text" name="practiceName" value={practiceName} onChange={(e) => setPracticeName(e.target.value)} required placeholder="Practice name&lowast;"/>
            <input className={style.emailAddress} type="email" name="emailAddress" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required placeholder="Email address&lowast;"/>
            <input className={style.tel} type="tel" name="tel" value={tel} onChange={(e)=>setTel(e.target.value)} required placeholder="Phone&lowast;"/>
            <input className={style.url} type="url" name="url" value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="Website"/>
        </div>
           
        <div className={style.formRight}> 
            <select className={style.selectPlan} value={selectPlan} onChange={(e)=>(setSelectPlan(e.target.value))} required>
                <option className={style.selectPlanShown}>Select Plan&lowast;</option>
                <option>Plan 1</option>
                <option>Plan 2</option>
                <option>Plan 3</option>
            </select>
            <input className={style.homeAddr} type="text" name="homeAddr" value={homeAddr} onChange={(e)=>setHomeAddr(e.target.value)} required placeholder="Enter your address&lowast;"/>
            <textarea className={style.comment} name="comment" value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="Got a question? Feel free to type it here!"></textarea>
        </div>
        </div>  
        <div>
        <button type="submit" className={style.submitBut}>Submit Form</button>                     
        </div>
      </form>



    
     
    </div>
  ) 
}

export default SignupForm2
