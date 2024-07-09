import React from 'react'
import './started.scss';
import { started, upload } from '../../../assets/images/png';

export default function Started() {
  return (
    <div>
      <section className="started">
        <div className="container">
          <div className="started-div">
            <div className="started-bg" data-aos="fade-left" data-aos-duration="1000"></div>
            <div className="started-grid">
              <div className="started-grid-box">
                <img src={started} alt="started" data-aos="zoom-in" data-aos-duration="1000" />
              </div>
              <div className="started-grid-box2" data-aos="fade-up" data-aos-duration="1000">
                <h2>Get started with the simpliest static page</h2>
                <div className="hbd1-button">
                  <button><img src={upload} alt="upload" /> Upload for Free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
