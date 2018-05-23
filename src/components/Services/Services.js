import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="servMain">
      <div className="services">
        <div className="specService">
          <div className="servTitle">
            Personal Training
          </div>
          <hr/>
          <div className="servText">
          It takes more than pure sweat to achieve your goals. Let me create a workout plan for you that’s tailored to your body now — and moves you forward to where you want to go. Grounded in science and crafted by experts, your personal training program takes the guesswork out of working out, so you can achieve more with the time you have.
          </div>
          <button className='subButton'>Subscribe</button>
        </div>
        <div className="specService">
          <div className="servTitle">
            Programming
          </div>
          <hr/>
          <div className="servText">
          It takes more than pure sweat to achieve your goals. Let me create a workout plan for you that’s tailored to your body now — and moves you forward to where you want to go. Grounded in science and crafted by experts, your personal training program takes the guesswork out of working out, so you can achieve more with the time you have.
          </div>
          <button className='subButton'>Subscribe</button>
        </div>
      </div>
      <div className="picCont">
          {/* <div className="pic1" > */}
            <img className='pic1' src="http://www.crib-life.com/wp-content/uploads/2018/03/Das-Trainingslager-Personal-Training-Berlin-Personal-Trainer-Berlin-Fitness-Sport-Gesund-Raphael-Jesse-Gym.jpg" alt=""/>
          {/* <div/> */}
          {/* <div className="pic2" > */}
            <img className='pic2' src="https://cdn.naturalhealers.com/wp-content/uploads/2016/09/personal-training-related-2.jpg" alt=""/>
          {/* </div> */}
          {/* <div className="pic3" > */}
            <img className='pic3' src="http://metroymca.org/wp-content/uploads/2015/03/Adult-Personal-Training.jpg" alt=""/>
          {/* </div> */}
        </div>
      </div>
    // </div>
  );
}

export default Services;
