import style from "./SignupHero.module.css"

function SignupHero() {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Let's start a great partnership</h1>
        <p className={style.paragraph}>So you're ready to grow your practice with Xero - good move. 
        We will be in touce to get you set up, certified and confident with your free Xero Partnership Edition.</p>
    </div>
  )
}

export default SignupHero
