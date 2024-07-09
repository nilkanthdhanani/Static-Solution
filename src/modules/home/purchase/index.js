import React from 'react'
import './purchase.scss';
import GreenCheck from '../../../assets/images/svg/greenCheck';
import RightArrow from '../../../assets/images/svg/rightArrow';

export default function Purchase() {
  return (
    <div>
      <section className="purchase">
        <div className="container">
          <h2 data-aos="fade-down">Purchase</h2>
          <div className="purchase-div">
            <div className="purchase-div1" data-aos="fade-right" data-aos-duration="1000">
              <p>Start using static.app as a hosting for your websites today to get the best features to buck ratio on the market.</p>
            </div>
            <div className="purchase-div2" data-aos="fade-left" data-aos-duration="1000">
              <div className="purchase-div2-list"><GreenCheck />Unlimited Pages</div>
              <div className="purchase-div2-list"><GreenCheck />Unlimited Forms</div>
              <div className="purchase-div2-list"><GreenCheck />Unlimited HTTPS</div>
            </div>
            <div className="purchase-div2" data-aos="fade-left" data-aos-duration="1000">
              <div className="purchase-div2-list"><GreenCheck />Free Sub-Domain</div>
              <div className="purchase-div2-list"><GreenCheck />Unlimited Data</div>
              <div className="purchase-div2-list"><GreenCheck />24/7 Support</div>
            </div>
          </div>
          <div className="purchase-grid">
            <div className="purchase-grid-box">
              <div className="plan-box">
                <h4>Starter Plan</h4>
              </div>
              <h3>Free</h3>
              <div className="purchase-button">
                <button>Upload for Free <RightArrow /> </button>
              </div>
              <p>Free static.app domain included. <br /> No credit card</p>
            </div>
            <div className="purchase-grid-box">
              <div className="plan-box">
                <h4>Yearly Plan</h4>
                <a href="/">SAVE 25%</a>
              </div>
              <h3>$9<span>/month</span></h3>
              <div className="purchase-button">
                <button>Proceed Annually <RightArrow /> </button>
              </div>
              <p>Billed $108 per website annually. <br /> $36 cheaper to this way.</p>
            </div>
            <div className="purchase-grid-box">
              <div className="plan-box">
                <h4>Monthly Plan</h4>
              </div>
              <h3>$12<span>/month</span></h3>
              <div className="purchase-button">
                <button>Proceed Monthly <RightArrow /> </button>
              </div>
              <p>Billed $12 per website monthly. <br /> Total is $144 per year.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
