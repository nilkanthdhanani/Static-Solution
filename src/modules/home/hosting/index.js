import React from 'react'
import './hosting.scss';
import Lock from '../../../assets/images/svg/lock';
import Domain from '../../../assets/images/svg/domain';
import Code from '../../../assets/images/svg/code';
import Storage from '../../../assets/images/svg/storage';

export default function Hosting() {
  return (
    <div>
      <section className="hosting">
        <div className="container">
          <div className="hosting-div">
            <div className="hosting-div1" data-aos="fade-right" data-aos-duration="1000">
              <h2>Hosting solution with benefits.</h2>
              <p>Turn your ideas into reality with Static. With a lot of powerful features, we guarantee simplicity and clarity.</p>
              <div className="main-button">
                <button>read more</button>
              </div>
            </div>
            <div className="hosting-div2">
              <div className="hosting-div2-grid">
                <div className="hosting-div2-grid-box" data-aos="fade-up" data-aos-duration="1000">
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
                <div className="hosting-div2-grid-box" data-aos="fade-up" data-aos-duration="1000">
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
                <div className="hosting-div2-grid-box" data-aos="fade-up" data-aos-duration="1000">
                  <div className="icon-roung">
                    <Domain />
                  </div>
                  <h3>Personal Domain</h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  <div className="more-link">
                    <a href="/">MORE</a>
                  </div>
                </div>
                <div className="hosting-div2-grid-box" data-aos="fade-up" data-aos-duration="1000">
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
    </div>
  )
}
