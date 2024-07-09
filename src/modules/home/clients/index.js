import React from 'react'
import './clients.scss';
import { person1, person2, person3, person4 } from '../../../assets/images/jpg';

export default function Clients() {
  return (
    <div>
      <section className="clients">
        <div className="container">
          <div className="clients-div">
            <span data-aos="zoom-in" data-aos-duration="1000">TESTIMONIALS</span>
            <h2 data-aos="zoom-in" data-aos-duration="2000">What Clients Say</h2>
            <p data-aos="zoom-in" data-aos-duration="3000">We place huge value on strong relationships and have seen the benefit they bring to our business. Customer feedback is vital in helping us to get it right.</p>
            <div className="clients-div-grid">
              <div className="clients-div-grid-box" data-aos="fade-up" data-aos-duration="1000">
                <div className="person-image">
                  <img src={person1} alt="person1" />
                </div>
                <p>Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro.</p>
                <h3>Nat Raynolds</h3>
                <span>Cheif Accountant</span>
              </div>
              <div className="clients-div-grid-box" data-aos="fade-up" data-aos-duration="1000">
                <div className="person-image">
                  <img src={person2} alt="person2" />
                </div>
                <p>Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam elementum pulvinar etiam. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>
                <h3>Celia Almeda</h3>
                <span>Secretary</span>
              </div>
              <div className="clients-div-grid-box" data-aos="fade-up" data-aos-duration="1000">
                <div className="person-image">
                  <img src={person3} alt="person3" />
                </div>
                <p>Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl dictumst vestibulum rhoncus est pellentesque elit.</p>
                <h3>Bob Roberts</h3>
                <span>Sales Manager</span>
              </div>
              <div className="clients-div-grid-box" data-aos="fade-up" data-aos-duration="1000">
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
    </div>
  )
}
