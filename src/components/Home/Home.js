import React from "react";
import "./Home.css";
import headshot from "../../pictures/headshot.jpg";

function Home() {
  return (
    <div className="main">
      <div className="mainSplash">
        <div className="bio">
          <img className="headshot" src={headshot} alt="" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
        <div className="rightSplash">
          <img
            className="barbell"
            src="https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png?1509471214"
            alt=""
          />
          <img
            className="barbell"
            src="https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png?1509471214"
            alt=""
          />
          <div className="certs">
            <div className='certTitle'>Certifications:</div>
            <hr/>
            <li className="certItem">National Academy of Sports Medicine</li>
            <li className="certItem">American College of Sports Medicine</li>
            <li className="certItem">National Exercise and Sports Training Association</li>
          </div>
        </div>
      </div>
      <div className="contact">
        <div>Email: athena@nyefitness.com</div>
        <div>Phone: (123)456-7890</div>
      </div>
    </div>
  );
}

export default Home;
