import React from 'react';
import './home.scss';
import { create, heroBanner, started, upload, youtube } from '../../assets/images/png';
import Lock from '../../assets/images/svg/lock';
import Domain from '../../assets/images/svg/domain';
import Code from '../../assets/images/svg/code';
import Storage from '../../assets/images/svg/storage';
import { person1, person2, person3, person4 } from '../../assets/images/jpg';
import GreenCheck from '../../assets/images/svg/greenCheck';
import RightArrow from '../../assets/images/svg/rightArrow';
import Contact from '../contact';

export default function Home() {
  return (
    <>
      <section className="hero-banner">
        <div className="container">
          <div className="hero-banner-div">
            <div className="hbd1">
              <h1>One-click solution for your static website.</h1>
              <div className="hbd1-button">
                <button>
                  <img src={upload} alt="upload" />
                  Upload for Free
                </button>
                <button>
                  <img src={youtube} alt="youtube" />
                  Watch Video
                </button>
              </div>
            </div>
            <div className="hbd2">
              <img src={heroBanner} alt="heroBanner" />
            </div>
          </div>
        </div>
      </section>

      <section className="hosting">
        <div className="container">
          <div className="hosting-div">
            <div className="hosting-div1">
              <h2>Hosting solution with benefits.</h2>
              <p>Turn your ideas into reality with Static. With a lot of powerful features, we guarantee simplicity and clarity.</p>
              <div className="main-button">
                <button>read more</button>
              </div>
            </div>
            <div className="hosting-div2">
              <div className="hosting-div2-grid">
                <div className="hosting-div2-grid-box">
                  <div className="icon-roung">
                    <Lock />
                  </div>
                  <div className="free-button">
                    <button>FREE</button>
                  </div>
                  <h3>SSL Certificate</h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  <div className="more-link">
                    <a href="/">MORE</a>
                  </div>
                </div>
                <div className="hosting-div2-grid-box">
                  <div className="icon-roung">
                    <Code />
                  </div>
                  <h3>Code Editor</h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  <div className="more-link">
                    <a href="/">MORE</a>
                  </div>
                </div>
              </div>
              <div className="hosting-div2-grid">
                <div className="hosting-div2-grid-box">
                  <div className="icon-roung">
                    <Domain />
                  </div>
                  <h3>Personal Domain</h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  <div className="more-link">
                    <a href="/">MORE</a>
                  </div>
                </div>
                <div className="hosting-div2-grid-box">
                  <div className="icon-roung">
                    <Storage />
                  </div>
                  <div className="free-button">
                    <button>FREE</button>
                  </div>
                  <h3>Media Storage</h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  <div className="more-link">
                    <a href="/">MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="create">
        <div className="container">
          <div className="create-div">
            <div className="create-div-bg"></div>
            <div className="create-div-image">
              <img src={create} alt="create" />
              <div className="create-div-round"></div>
            </div>
            <div className="create-div-text">
              <div className="create-div-text-box">
                <h2>Create Amazing Website</h2>
                <p>Quis viverra nibh cras pulvinar mattis nunc sed. Lacus sed turpis tincidunt id aliquet risus feugiat in.  Auctor augue mauris augue neque gravida in fermentum et. Feugiat in fermentum <a href="/">posuere</a> urna.</p>
                <div className="main-button">
                  <button>read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clients">
        <div className="container">
          <div className="clients-div">
            <span>TESTIMONIALS</span>
            <h2>What Clients Say</h2>
            <p>We place huge value on strong relationships and have seen the benefit they bring to our business. Customer feedback is vital in helping us to get it right.</p>
            <div className="clients-div-grid">
              <div className="clients-div-grid-box">
                <div className="person-image">
                  <img src={person1} alt="person1" />
                </div>
                <p>Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro.</p>
                <h3>Nat Raynolds</h3>
                <span>Cheif Accountant</span>
              </div>
              <div className="clients-div-grid-box">
                <div className="person-image">
                  <img src={person2} alt="person2" />
                </div>
                <p>Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam elementum pulvinar etiam. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>
                <h3>Celia Almeda</h3>
                <span>Secretary</span>
              </div>
              <div className="clients-div-grid-box">
                <div className="person-image">
                  <img src={person3} alt="person3" />
                </div>
                <p>Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl dictumst vestibulum rhoncus est pellentesque elit.</p>
                <h3>Bob Roberts</h3>
                <span>Sales Manager</span>
              </div>
              <div className="clients-div-grid-box">
                <div className="person-image">
                  <img src={person4} alt="person4" />
                </div>
                <p>Nisl condimentum id venenatis a gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl condimentum.</p>
                <h3>Mattie Smith</h3>
                <span>Accountant-auditor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="purchase">
        <div className="container">
          <h2>Purchase</h2>
          <div className="purchase-div">
            <div className="purchase-div1">
              <p>Start using static.app as a hosting for your websites today to get the best features to buck ratio on the market.</p>
            </div>
            <div className="purchase-div2">
              <div className="purchase-div2-list"><GreenCheck />Unlimited Pages</div>
              <div className="purchase-div2-list"><GreenCheck />Unlimited Forms</div>
              <div className="purchase-div2-list"><GreenCheck />Unlimited HTTPS</div>
            </div>
            <div className="purchase-div2">
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
              <div className="purchase-button" id="purchase-button-first">
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

      <section className="started">
        <div className="container">
          <div className="started-div">
            <div className="started-bg"></div>
            <div className="started-grid">
              <div className="started-grid-box">
                <img src={started} alt="started" />
              </div>
              <div className="started-grid-box2">
                <h2>Get started with the simpliest static page</h2>
                <div className="hbd1-button">
                  <button><img src={upload} alt="upload" /> Upload for Free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact/>
    </>
  )
}
