import style from "./SignupForm.module.css"
import { useState } from "react"
import { useEffect } from "react"

function SignupForm() {

  function handleSubmit(e){
    e.preventDefault() 
  }

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [practiceName, setPracticeName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [tel, setTel] = useState("")
  const [url, setUrl] = useState("")
  const [plan, setPlan] = useState("")
  const [homeAddr, setHomeAddr] = useState("")
  const [comments, setComments] = useState("")
  

   useEffect(()=>{
   console.log(emailAddress)
   console.log(firstName)
  }, [emailAddress, firstName])
  


  return (
    <div className={style.container}>

      <form onSubmit={handleSubmit} className={style.formContainer}>
        <h2 className={style.formH2}>Tell us about you</h2>        
        
        <div className={style.containerBelowH2}>
          <div className={`${style['form1']} ${style['formsBoth']}`}>
          
            <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className={style.firstName} placeholder='First name&lowast;'/>
            <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required className={style.lastName} placeholder='Last name&lowast;'/>
         
            <input type="text" name="practiceName" value={practiceName} onChange={(e) => setPracticeName(e.target.value)} required className={style.practiceName} placeholder='Practice name&lowast;'/>
            <input type="email" name="emailAddress" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required className={style.emailAddress} placeholder='Email address&lowast;'/>
            <input type="tel" name="tel" value={tel} onChange={(e) => setTel(e.target.value)} required className={style.phone}placeholder='Phone&lowast;'/>
            <input type="url" name="url" value={url} onChange={(e) => setUrl(e.target.value)} required className={style.website}placeholder='Website'/>
          </div>
        
          <div className={`${style['form2']} ${style['formsBoth']}`}>
            <select value={plan} onChange={(e) => setPlan(e.target.value)} className={style.selectPlan}>
              <option className={style.selectPlanShow}>Select Plan&lowast;</option>
              <option>Plan 1</option>
              <option>Plan 2</option>
              <option>Plan 3</option>
            </select>
            <input type="text" name="homeAddr" value={homeAddr} onChange={(e) => setHomeAddr(e.target.value)} required className={style.addr} placeholder="Enter your address&lowast;"/>
            <textarea name="comments" value={comments} onChange={(e) => setComments(e.target.value)} required className={style.commentsSection} placeholder="Got a question? Feel free to type it here!"></textarea>
          </div>
        </div>
        <button type="submit" className={style.submitBut}>Submit Form</button>
      </form>
    </div>
  )
}

export default SignupForm
