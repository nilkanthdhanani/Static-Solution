import React, { useState } from 'react';
import './contact.scss';
import { facebook, instagram, location, mail, phone, twitter, youtube2 } from '../../assets/images/png';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <section className="contact">
                <div className="container2">
                    <div className="contact-div">
                        <div className="contact-div1">
                            <h2>Contact Info</h2>
                            <div className="contact-info">
                                <div className="contact-info-detail">
                                    <img src={phone} alt="phone" />
                                    <p>+1 (234) 567-8910</p>
                                </div>
                                <div className="contact-info-detail">
                                    <img src={mail} alt="mail" />
                                    <p>contact@staticsolution.com</p>
                                </div>
                                <div className="contact-info-detail">
                                    <img src={location} alt="location" />
                                    <p>203, Envato Labs, Behind Alis Steet, Australia</p>
                                </div>
                            </div>
                            <div className="contact-icon">
                                <a href="https://www.facebook.com/" target='blank'>
                                    <img src={facebook} alt="facebook" />
                                </a>
                                <a href="https://www.instagram.com/" target='blank'>
                                    <img src={twitter} alt="twitter" />
                                </a>
                                <a href="https://x.com/?lang=en" target='blank'>
                                    <img src={instagram} alt="instagram" />
                                </a>
                                <a href="https://www.youtube.com/" target='blank'>
                                    <img src={youtube2} alt="youtube2" />
                                </a>
                            </div>
                        </div>
                        <div className="contact-div2">
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" required />
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter a valid email address" required />
                                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" required></textarea>
                                <button type="submit">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
