import style from "./SignupForm.module.css"
import { useState } from "react"
import { useEffect } from "react"

function SignupForm() {

            //CREATE userData (type = object w/ all the "name" props of all the inputs) state/setter

  // Q- Clarify & confirm: in the MID, when triggered by the onChange, the setter function for
  //the userData variable(state) (which type is an obj) is updating one 
  //of it's properties' state (), or is it actually "updating one of it's props's value"? Are
  //each prop (which are the name/id in the input) just a prop or also a state or just a state?
  const [userData, setUserData] = useState({
    // all the inputs by unique name(like ID)
    firstName: "",
    lastName: "",
    practiceName: "",
    emailAddress: "",
    tel: "",
    url: "",
    selectPlan: "",
    homeAddr: "",
    comment: "",
  })
          //CREATE handleChange handler function that extracts name/value from event, and then updates states 
          //with them vis setUserData setter 

  // For the ADVANCED, make a handleChange function which 1) grabs/exposes name and value props from event 
  //2) then uses the setter function for the userData object to update the value with the props grabbed above 
  //Q - what EXACTLY is the e below, it's an event, but what is the actual event mean?
  function handleChange(e){
  const {name, value} = e.target
  //so since it is object, [name]:value is how to rename it since [name] is name in the
  //object and value is the value in e.target, and can't set the name in the object to the value in the event a 
  //different way?
  setUserData(prev=>({...prev, [name]:value}))
}

// function handleChange(e){
//   const {name, value} = e.target
//   setUserData(prev=>({...prev, [name]:value}))
// }

// function handleChange(e){
//   const [name, value] = e.target
//   setUserData(prev=>({...prev, [name]:value}))
// }

// Q - need this for all 3 levels? I think so since need on all forms?
  function handleSubmit(e){
    e.preventDefault() 
  }

   //in the BASIC, when triggered by the onChange, the setter 
  // function for each is alone is updating each variable's state here seperately 1 by 1
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [practiceName, setPracticeName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [tel, setTel] = useState("")
  const [url, setUrl] = useState("")
  const [plan, setPlan] = useState("")
  const [homeAddr, setHomeAddr] = useState("")
  const [comments, setComments] = useState("")
  

  //Q do i need this at all, and when would I need it?
  //  useEffect(()=>{
  //  console.log(emailAddress)
  //  console.log(firstName)
  // }, [emailAddress, firstName])
  


  return (
    <div className={style.container}>

      <form onSubmit={handleSubmit} className={style.formContainer1}>
        <h2 className={style.formH2}>Tell us about you: Basic</h2>        
        
        <div className={style.containerBelowH2}>
          <div className={`${style['form1']} ${style['formsBoth']}`}>
          {/* are all 3 types of inputs jsx or js or react? */}
            <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className={style.firstName} placeholder='First name&lowast;'/>
            <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required className={style.lastName} placeholder='Last name&lowast;'/>
         
            <input type="text" name="practiceName" value={practiceName} onChange={(e) => setPracticeName(e.target.value)} required className={style.practiceName} placeholder='Practice name&lowast;'/>
            <input type="email" name="emailAddress" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required className={style.emailAddress} placeholder='Email address&lowast;'/>
            <input type="tel" name="tel" value={tel} onChange={(e) => setTel(e.target.value)} required className={style.phone}placeholder='Phone&lowast;'/>
            <input type="url" name="url" value={url} onChange={(e) => setUrl(e.target.value)} required className={style.website}placeholder='Website'/>
          </div>
        
          <div className={`${style['form2']} ${style['formsBoth']}`}>
            {/* is it okay this one doesn't have a name? */}
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


      <form onSubmit={handleSubmit} className={style.formContainer2}>
        <h2 className={style.formH2}>Tell us about you: Mid</h2>        
        
        <div className={style.containerBelowH2}>
          <div className={`${style['form1']} ${style['formsBoth']}`}>
          {/* how do I correctly organize input structure for each of the 3? */}
            <input 
              type="text" 
              name="firstName" 
              value={firstName} 
              onChange={(e) => setUserData(prev=>({...prev, firstName: e.target.value}))} 
              required 
              className={style.firstName} 
              placeholder='First name&lowast;'/>
            <input 
            type="text" 
            name="lastName" 
            value={lastName} 
            onChange={(e)=>setUserData(prev=>({...prev, lastName:e.target.value}))} 
            required 
            className={style.lastName} 
            placeholder='Last name&lowast;'/>
         
            <input 
              type="text" 
              name="practiceName" 
              value={practiceName} 
              onChange={(e)=>setUserData(prev=>({...prev, lastName : e.target.value}))}
              required 
              className={style.practiceName} 
              placeholder='Practice name&lowast;'/>
            <input 
              type="email" 
              name="emailAddress" 
              value={emailAddress} 
              onChange={(e)=>setUserData(prev=>({...prev, emailAddress : e.target.value}))} 
              required 
              className={style.emailAddress} 
              placeholder='Email address&lowast;'/>
            <input 
              type="tel" 
              name="tel" 
              value={tel} 
              onChange={(e)=>setUserData(prev=>({...prev, tel : e.target.value}))}
              required 
              className={style.phone}
              placeholder='Phone&lowast;'/>
            <input 
              type="url" 
              name="url" 
              value={url} 
              onChange={(e)=>setUserData(prev=>({...prev, url:e.target.value}))}
              required 
              className={style.website}
              placeholder='Website'/>
          </div>
        
          <div className={`${style['form2']} ${style['formsBoth']}`}>
            <select 
            // Q/Clarification: this one didn't have a name, accidentally forgot or doesn't have name? Will add one for now, esp
            //since i havea plan state variable at the top
              name="plan"
              value={plan} 
              onChange={(e)=>setUserData(prev=>({...prev, plan:e.target.value}))}
              className={style.selectPlan}>
                <option className={style.selectPlanShow}>Select Plan&lowast;</option>
                <option>Plan 1</option>
                <option>Plan 2</option>
                <option>Plan 3</option>
            </select>
            <input 
              type="text" 
              name="homeAddr" 
              value={homeAddr} 
              onChange={(e)=>setUserData(prev({...prev, homeAddr:e.target.value}))}
              required 
              className={style.addr} 
              placeholder="Enter your address&lowast;"/>
            <textarea 
              name="comments" 
              value={comments} 
              onChange={(e)=>setUserData(prev=>({...prev, comments:e.target.value}))}
              required 
              className={style.commentsSection} 
              placeholder="Got a question? Feel free to type it here!"></textarea>
          </div>
        </div>
        <button type="submit" className={style.submitBut}>Submit Form</button>
      </form>

      <form onSubmit={handleSubmit} className={style.formContainer3}>
        <h2 className={style.formH2}>Tell us about you: Advanced</h2>        
        
        <div className={style.containerBelowH2}>
          <div className={`${style['form1']} ${style['formsBoth']}`}>
          
            <input 
              type="text" 
              name="firstName" 
              value={firstName} 
              onChange={handleChange} 
              required 
              className={style.firstName} 
              placeholder='First name&lowast;'/>
            <input 
              type="text" 
              name="lastName" 
              value={lastName} 
              onChange={handleChange}  
              required 
              className={style.lastName} 
              placeholder='Last name&lowast;'/>
         
            <input 
              type="text" 
              name="practiceName" 
              value={practiceName} 
              onChange={handleChange}
              required 
              className={style.practiceName} 
              placeholder='Practice name&lowast;'/>
            <input 
              type="email" 
              name="emailAddress" 
              value={emailAddress} 
              onChange={handleChange} 
              required 
              className={style.emailAddress} 
              placeholder='Email address&lowast;'/>
            <input 
              type="tel" 
              name="tel" 
              value={tel} 
              onChange={handleChange} 
              required 
              className={style.phone}
              placeholder='Phone&lowast;'/>
              <input 
              type="url" 
              name="url" 
              value={url} 
              onChange={handleChange} 
              required 
              className={style.website}placeholder='Website'/>
          </div>
        
          <div className={`${style['form2']} ${style['formsBoth']}`}>
            <select 
              name="plan"
              value={plan} 
              onChange={handleChange}
              className={style.selectPlan}>
                <option className={style.selectPlanShow}>Select Plan&lowast;</option>
                <option>Plan 1</option>
                <option>Plan 2</option>
                <option>Plan 3</option>
            </select>
            <input 
              type="text" 
              name="homeAddr" 
              value={homeAddr} 
              onChange={handleChange}
              required 
              className={style.addr}
              placeholder="Enter your address&lowast;"/>
            <textarea 
              name="comments" 
              value={comments} 
              onChange={handleChange} 
              required 
              className={style.commentsSection} 
              placeholder="Got a question? Feel free to type it here!"></textarea>
          </div>
        </div>
        <button type="submit" className={style.submitBut}>Submit Form</button>
      </form>

    </div>
  )
}

export default SignupForm
