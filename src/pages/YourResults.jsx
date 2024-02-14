import style from "./YourResults.module.css"
import { HiOutlineLightningBolt } from "react-icons/hi";
import { LiaBrainSolid } from "react-icons/lia";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi2";

function YourResults() {
  return (
    <div className={style.whiteComponentContainer}>
      
      <div className={style.parentContainer}>
      
        <div className={style.blueChildLeft}>
            <p className={style.yourResultsTitle}>Your Result</p>

            <div className={style.circleWithNum}>
                <p className={style.seventySix}>76</p>
                <p className={style.smallNum}>of 100</p>
            </div>
            
            <div className={style.messageBelowNum}>
              <h3 className={style.affirmation}>Great</h3>
              <p className={style.affirmationMsg}>You scored higher than 65% of the people who have taken these tests.</p>
            </div>  

        </div>

        <div className={style.whiteChildRight}>
            <p className={style.summaryTitle}>Summary</p>
            
            <div className={style.fourSumContainer}>
                <div className={style.redReaction}>
    
                        <p><HiOutlineLightningBolt /> Reaction</p>
                        <p className={style.hundredBlue}><span className={style.bold}>80</span>/100</p>
                                     
                </div>  
                
                <div className={style.yellowMemory}>
        
                        <p><LiaBrainSolid /> Memory</p>
                        <p className={style.hundredBlue}><span className={style.bold}>80</span>/100</p>
                    
                </div>  
                
                <div className={style.greenVerbal}>
                  
                        <p><HiOutlineChatBubbleOvalLeftEllipsis /> Verbal</p>
                        <p className={style.hundredBlue}><span className={style.bold}>80</span>/100</p>
                    
                </div>  
                
                <div className={style.blueVisual}>
                   
                        <p><HiOutlineEye /> Visual</p>
                        <p className={style.hundredBlue}><span className={style.bold}>80</span>/100</p>
                    
                </div>
            
            </div>

            <div className={style.continueBut}>Continue</div>  
        
        </div>
      
      </div>
    
    </div>
  )
}

export default YourResults
