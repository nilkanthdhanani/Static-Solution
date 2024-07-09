import React from 'react'
import './heroBanner.scss';
import { heroBanner, upload, youtube } from '../../../assets/images/png';

export default function HeroBanner() {
  return (
    <div>
      <section className="hero-banner">
        <div className="container">
          <div className="hero-banner-div">
            <div className="hbd1" data-aos="fade-right" data-aos-duration="1000">
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
              <img src={heroBanner} alt="heroBanner" data-aos="zoom-in-up" data-aos-duration="1000" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
