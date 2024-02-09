import style from "./SignupForm.module.css"


function SignupForm() {

  function handleSubmit(e){
    e.preventDefault() 
  }

  return (
    <div className={style.container}>

      <form onSubmit={handleSubmit} className={style.formContainer}>
        <h2 className={style.formH2}>Tell us about you</h2>        
        
        <div className={style.containerBelowH2}>
          <div className={`${style['form1']} ${style['formsBoth']}`}>
          
            <input type="text" name="firstName" value="" required className={style.firstName} placeholder='First name&lowast;'/>
            <input type="text" name="lastName" value="" required className={style.lastName} placeholder='Last name&lowast;'/>
         
            <input type="text" name="practiceName" value="" required className={style.practiceName} placeholder='Practice name&lowast;'/>
            <input type="email" name="emailAddress" value="" required className={style.emailAddress} placeholder='Email address&lowast;'/>
            <input type="tel" name="tel" value="" required className={style.phone}placeholder='Phone&lowast;'/>
            <input type="url" name="url" value="" required className={style.website}placeholder='Website'/>
          </div>
        
          <div className={`${style['form2']} ${style['formsBoth']}`}>
            <select value="" className={style.selectPlan}>
              <option className={style.selectPlanShow}>Select Plan&lowast;</option>
              <option>Plan 1</option>
              <option>Plan 2</option>
              <option>Plan 3</option>
            </select>
            <input type="text" name="homeAddr" value="" required className={style.addr} placeholder="Enter your address&lowast;"/>
            <textarea name="comments" value="" required className={style.commentsSection} placeholder="Got a question? Feel free to type it here!"></textarea>
          </div>
        </div>
        <button type="submit" className={style.submitBut}>Submit Form</button>
      </form>
    </div>
  )
}

export default SignupForm
