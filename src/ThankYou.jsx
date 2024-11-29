import React from "react";
import svg from './assets/images/illustration-thank-you.svg';


function ThankYou(props) {
    return <div>
       
        <div className="ratingBox thankYouBox">
             <section>
                <div className="svgBox">
                    <img src={svg}/>
                </div>
           </section>
           <section>
                <div className="selection">
                    <p>You selected {props.num} out of 5</p>
                </div>
           </section>
           <section>
            <div className="thankYouHeading">
                <h1>Thank You!</h1>
            </div>
            <div className="appreciationText">
                <p>We appreciate you taking the time to give a rating. 
                    If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
           </section>
        </div>
    </div>
};
 export default ThankYou;