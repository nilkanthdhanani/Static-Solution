import React, { useState } from 'react';
import { favicon } from '../../assets/images/png';
import AskBox from './askbox/askbox';
import './footer.scss';

export default function Footer() {
  const [isAskBoxOpen, setIsAskBoxOpen] = useState(false);

  const toggleAskBox = () => {
    setIsAskBoxOpen(!isAskBoxOpen);
  };

  return (
    <>
      <footer>
        <div className="containerF">
          <div className="footer-first">
            <div className="footer-first-main">
              <img src={favicon} alt="faviconB" onClick={toggleAskBox} />
              <div className="footer-first-ask">
                <h3>Click for questions?</h3>
              </div>
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-grid-box">
              <h2>Company</h2>
              <a href="/">About Us</a>
              <a href="/">Contact Us</a>
              <a href="/">Newsletter</a>
              <a href="/">Privacy</a>
              <a href="/">Terms</a>
              <a href="/">Cookies</a>
              <a href="/">Status</a>
            </div>
            <div className="footer-grid-box">
              <h2>Product</h2>
              <a href="/">Postcards: Email Builder</a>
              <a href="/">Slides: Website Generator</a>
              <a href="/">Startup: Bootstrap Builder</a>
              <a href="/">Static Pages</a>
              <a href="/">Affiliate Program</a>
              <a href="/">Help Articles</a>
              <a href="/">Perks (Partners Deals)</a>
            </div>
            <div className="footer-grid-box">
              <h2>Templates</h2>
              <a href="/">Email Templates</a>
              <a href="/">Bootstrap Templates</a>
              <a href="/">Website Templates</a>
              <a href="/">Gmail Email Templates</a>
              <a href="/">Mailchimp Email Templates</a>
              <a href="/">Email Marketing Templates</a>
              <a href="/">Email Newsletter Templates</a>
            </div>
            <div className="footer-grid-box">
              <h2>Resources</h2>
              <a href="/">Siter.io: No-Code Website Builder</a>
              <a href="/">Pulsetic: Website Uptime Monitoring</a>
              <a href="/">Static.app: Static Website Hosting</a>
              <a href="/">Mailpost.io: Email Marketing Software</a>
            </div>
          </div>
          <div className="footer-last">COPYRIGHT © 2010-2024</div>
        </div>
      </footer>
      <AskBox isOpen={isAskBoxOpen} onClose={toggleAskBox} />
    </>
  );
}
