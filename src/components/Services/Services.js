import React, { Component } from "react";
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import "./Services.css";

class Services extends Component {
  onToken = (token) => {
    token.card = void 0;
    axios.post('/api/payment', { token, amount: 72000 /* the amount actually charged*/ } ).then(response => {
        this.setState({
            redirect: true
        })
        alert('Thanks for your purchase')
    });
  } 

  onToken1 = (token) => {
    token.card = void 0;
    axios.post('/api/payment', { token, amount: 20000 /* the amount actually charged*/ } ).then(response => {
        this.setState({
            redirect: true
        })
        alert('Thanks for your purchase')
    });
  } 
  render() {
    return (
      <div className="servMain">
        <div className="services">
          <div className="specService">
            <div className="servTitle">Personal Training</div>
            <hr />
            <div className="servText">
              It takes more than pure sweat to achieve your goals. Let me create
              a workout plan for you that’s tailored to your body now — and
              moves you forward to where you want to go. Grounded in science and
              crafted by experts, your personal training program takes the
              guesswork out of working out, so you can achieve more with the
              time you have.
            </div>
            <div className="price">$720/month - 4 sessions/week</div>
            <StripeCheckout
                    token={this.onToken}
                    stripeKey={ 'pk_test_YZqbOVPrXNlkXZnPazvxxH61' }
                    amount={72000} // The amount displayed at the bottom of the payment form
                />
          </div>
          <div className="specService">
            <div className="servTitle">Programming</div>
            <hr />
            <div className="servText">
              It takes more than pure sweat to achieve your goals. Let me create
              a workout plan for you that’s tailored to your body now — and
              moves you forward to where you want to go. Grounded in science and
              crafted by experts, your personal training program takes the
              guesswork out of working out, so you can achieve more with the
              time you have.
            </div>
            <div className="price">$200/month</div>
            <StripeCheckout
                    token={this.onToken1}
                    stripeKey={ 'pk_test_YZqbOVPrXNlkXZnPazvxxH61' }
                    amount={20000} // The amount displayed at the bottom of the payment form
                />
          </div>
        </div>
        <div className="picCont">
          {/* <div className="pic1" > */}
          <img
            className="pic1"
            src="http://www.crib-life.com/wp-content/uploads/2018/03/Das-Trainingslager-Personal-Training-Berlin-Personal-Trainer-Berlin-Fitness-Sport-Gesund-Raphael-Jesse-Gym.jpg"
            alt=""
          />
          {/* <div/> */}
          {/* <div className="pic2" > */}
          <img
            className="pic2"
            src="https://cdn.naturalhealers.com/wp-content/uploads/2016/09/personal-training-related-2.jpg"
            alt=""
          />
          {/* </div> */}
          {/* <div className="pic3" > */}
          <img
            className="pic3"
            src="http://metroymca.org/wp-content/uploads/2015/03/Adult-Personal-Training.jpg"
            alt=""
          />
          {/* </div> */}
        </div>
      </div>
      // </div>
    );
  }
}

export default Services;
