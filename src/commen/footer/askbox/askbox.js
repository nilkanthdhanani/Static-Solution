import React, { useState } from 'react';
import './askbox.scss';
import { ask, close, searchW } from '../../../assets/images/png';

export default function AskBox({ isOpen, onClose }) {
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

    const [activeTab, setActiveTab] = useState('ask');

    if (!isOpen) return null;

    return (
        <div className="ask-box-main">
            <button className="close-btn" onClick={onClose}>
                Close <img src={close} alt="close" />
            </button>
            <div className="ask-box-content">
                <div className="titelbar">
                    <button
                        className={activeTab === 'ask' ? 'active' : ''}
                        onClick={() => setActiveTab('ask')}>
                        <img src={ask} alt="ask" /> Ask
                    </button>
                    <button
                        className={activeTab === 'answers' ? 'active' : ''}
                        onClick={() => setActiveTab('answers')}>
                        <img src={searchW} alt="searchW" /> Answers
                    </button>
                </div>
                <div className={`ask-box ${activeTab === 'ask' ? 'active' : ''}`}>
                    <div className="ask-box-div">
                        <form onSubmit={handleSubmit}>
                            <label>Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            <label>Email address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            <label>How can we help?</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                            <button>Send a message</button>
                        </form>
                    </div>
                </div>
                <div className={`answers-box ${activeTab === 'answers' ? 'active' : ''}`}>
                    <div className="ask-input">
                        <input type="text" placeholder="What can we help you with?" />
                    </div>
                </div>
            </div>
        </div>
    );
}
