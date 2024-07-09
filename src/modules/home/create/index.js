import React from 'react'
import './create.scss';
import { create } from '../../../assets/images/png';

export default function Create() {
  return (
    <div>
      <section className="create">
        <div className="container">
          <div className="create-div">
            <div className="create-div-bg" data-aos="fade-up"></div>
            <div className="create-div-image">
              <img src={create} alt="create" data-aos="fade-down" />
              <div className="create-div-round" data-aos="fade-right"></div>
            </div>
            <div className="create-div-text">
              <div className="create-div-text-box" data-aos="fade-left">
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
    </div>
  )
}
