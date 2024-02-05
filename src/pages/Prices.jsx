import style from "./Prices.module.css"
import { Link } from "react-router-dom"
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoToggle } from "react-icons/io5";
import save from "../assets/save.png"

function Prices() {
  return (
    
    <div className={style.container}>
      <h1 className={style.title}>Pricing</h1>
      
      <div className={style.underTitle}>
      <span>Monthly</span>
      <span><IoToggle className={style.toggleIcon} /></span>
      <span>Yearly</span><span><img src={save} alt="arrow and discount percentage"></img></span>
      </div>

      <div className={style.planBoxes}>

        <div className={style.leftPink}>
            <div className={style.first}>
              <p className={style.tier}>Simple</p>
              <p className={style.price}>Free</p>
              <p className={style.audience}>Free plan for all users.</p>
            </div>
            <div className={style.second}>
              <ul>
                <li><IoIosCheckmarkCircle className={style.bullet} /> Store up to 20 businesses</li>
                <li><IoIosCheckmarkCircle className={style.bullet} /> 2 collaborators</li>
                <li><IoIosCheckmarkCircle className={style.bullet} /> Unlimited collaboration</li>
                <li><IoIosCheckmarkCircle className={style.bullet} /> End to encryption</li>
                <li className={style.lastLi}><IoIosCheckmarkCircle className={style.bullet} / > Mac, PC, Android, iOS, and Browser</li>
              </ul>
            </div>
            <div className={style.third}>
              <Link to="" className={style.buttonBlack}>Get Free Plan</Link>
            </div>
        </div>

       <div className={style.middleBlue}>
          <div className={style.first}>
            <p className={style.tier}>Efficient</p>
            <p className={style.price}>$15<span className={style.perMonth}>/month</span></p>
            <p className={style.audience}>Ideal for individual creators.</p>
          </div>
          <div className={style.second}>
            <ul>
              <li><IoIosCheckmarkCircle className={style.bullet} /> Everything in Simple</li>
              <li><IoIosCheckmarkCircle className={style.bullet} /> 512GB of business storage</li>
              <li><IoIosCheckmarkCircle className={style.bullet} /> Unlimited manamgemnt</li>
              <li><IoIosCheckmarkCircle className={style.bullet} /> Unlimited collaborators</li>
              <li className={style.lastLi}><IoIosCheckmarkCircle className={style.bullet} / > Links with password protection.</li>       
            </ul>
          </div>
          <div className={style.third}>
            <Link to="" className={style.buttonBlack}>Get Efficient Plan </Link> 
          </div>
       </div>
           
       <div className={style.rightYellow}>
        <div className={style.first}>
          <p className={style.tier}>Team</p>
          <p className={style.price}>$25<span className={style.perMonth}>/month</span></p>
          <p className={style.audience}>Small teams with up to 10 users.</p>
        </div>
        <div className={style.second}>
          <ul>
            <li><IoIosCheckmarkCircle className={style.bullet} /> Everything in Efficient</li>
            <li><IoIosCheckmarkCircle className={style.bullet} /> Unlimited team members</li>
            <li><IoIosCheckmarkCircle className={style.bullet} /> Custom storage plans</li>
            <li className={style.lastLi}><IoIosCheckmarkCircle className={style.bullet} / > White lable branding</li>        
          </ul>
        </div>
        
        <div className={style.third}>
          <Link to="" className={style.buttonBlack}>Get Team Plan</Link>
        </div>
       </div> 
      </div>
    </div>
  )
}

export default Prices
