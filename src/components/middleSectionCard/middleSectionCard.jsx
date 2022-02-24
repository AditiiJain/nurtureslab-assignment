import React from "react";
import{RiFileCopyFill} from "react-icons/ri"
import "./middleSectionCard.css"
 const MiddleSectionCard = ()=>{
     return(
         <>
         <div className="card">
             <div className="card-top">
                 <div></div>
                 <p><span>12.5%</span> of fee</p>
             </div>
             
             <div className="card-bottom">
                 <p>Your Referral Link for xyz</p>
                 <div className="card-bottom-box">
                     <p>http://unityexchange.design</p>
                     <RiFileCopyFill fontSize={"1rem"}/>
                 </div>
             </div>
         </div>
         </>
     )
 }
 export default MiddleSectionCard