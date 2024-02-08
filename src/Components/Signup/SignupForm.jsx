import style from "./SignupForm.module.css"


function SignupForm() {
  return (
    <div className={style.container}>
      {/* <h2 className={style.formH2}>Tell us about you</h2> */}
      <form className={style.form}>
        
        
        <div className={`${style['form1']} ${style['formsBoth']}`}>
          <input type="text" className={style.firstName} placeholder='First name*'/>
          <input type="text" className={style.lastName} placeholder='Last name*'/>
          <input type="text" className={style.practiceName} placeholder='Practice name*'/>
          <input type="email" className={style.emailAddress} placeholder='Email address*'/>
          <input type="tel" className={style.phone}placeholder='Phone*'/>
          <input type="url" className={style.website}placeholder='Website'/>
        </div>
        
        <div className={`${style['form2']} ${style['formsBoth']}`}>
          <select>
            <option>Select Plan</option>
            <option>Plan 1</option>
            <option>Plan 2</option>
            <option>Plan 3</option>
          </select>
          <input/>
          <textarea></textarea>
        </div>
  
      </form>
    </div>
  )
}

export default SignupForm
