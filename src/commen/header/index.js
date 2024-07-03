import React, { useState } from 'react';
import './header.scss';
import { logo, menu, favicon, drop1, drop2, drop3, drop4, search } from '../../assets/images/png';
import '../../styles/mixin/_mixin.scss';
import { Link } from 'react-router-dom';
import GreaterThan from '../../assets/images/svg/greaterThan';
import Dropdown from '../../assets/images/svg/dropdown';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isArticlesDropdownOpen, setIsArticlesDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleAppsDropdown = () => {
    setIsAppsDropdownOpen(!isAppsDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleArticlesDropdown = () => {
    setIsArticlesDropdownOpen(!isArticlesDropdownOpen);
  };

  return (
    <div className='header'>
      <div className="containerH">
        <div className="header-div">
          <div className="header-div-logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header-div-first">
            <div className="header-div-ancer" onClick={toggleAppsDropdown}>
              <Link>Apps</Link>
              <Dropdown />
              {isAppsDropdownOpen && (
                <div className="header-div-drop">
                  <div className="header-div-drop-text">
                    <div className="drop-head">
                      <img src={favicon} alt="favicon" />
                      <h2>Postcards</h2>
                    </div>
                    <p>Collaborate to create and edit email templates without any coding skills.</p>
                  </div>
                  <div className="header-div-drop-text">
                    <div className="drop-head">
                      <img src={favicon} alt="favicon" />
                      <h2>Startup</h2>
                    </div>
                    <p>Collaborate to create and edit email templates without any coding skills.</p>
                  </div>
                  <div className="header-div-drop-text">
                    <div className="drop-head">
                      <img src={favicon} alt="favicon" />
                      <h2>Slides</h2>
                    </div>
                    <p>Collaborate to create and edit email templates without any coding skills.</p>
                  </div>
                </div>
              )}
            </div>
            <div className="header-div-ancer" onClick={toggleServicesDropdown}>
              <Link>Services</Link>
              <Dropdown />
              {isServicesDropdownOpen && (
                <div className="header-div-drop">
                  <div className="header-div-drop-text">
                    <div className="drop-head">
                      <img src={drop1} alt="drop1" />
                      <h2>siter.io</h2>
                    </div>
                    <p>Collaborate to create and edit email templates without any coding skills.</p>
                  </div>
                  <div className="header-div-drop-text">
                    <div className="drop-head">
                      <img src={drop2} alt="drop2" />
                      <h2>pulsetic.com</h2>
                    </div>
                    <p>Collaborate to create and edit email templates without any coding skills.</p>
                  </div>
                  <div className="header-div-drop-text">
                    <div className="drop-head">
                      <img src={drop3} alt="drop3" />
                      <h2>static.app</h2>
                    </div>
                    <p>Collaborate to create and edit email templates without any coding skills.</p>
                  </div>
                  <div className="header-div-drop-text">
                    <div className="drop-head">
                      <img src={drop4} alt="drop4" />
                      <h2>mailpost.io</h2>
                    </div>
                    <p>Collaborate to create and edit email templates without any coding skills.</p>
                  </div>
                </div>
              )}
            </div>
            <div className="header-div-ancer" onClick={toggleArticlesDropdown}>
              <Link>Articles</Link>
              <Dropdown />
              {isArticlesDropdownOpen && (
                <div className="header-div-drop2">
                  <div className="header-div-drop-list">
                    <li>
                      <a href="design">Website Design</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="design">Email Design</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="design">Website Examples</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="design">Email Marketing</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="design">Website Tools</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="design">Email Tools</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="design">Bootstrap</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="design">Resources</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="design">View All Articles</a>
                      <GreaterThan />
                    </li>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="header-div-last">
            <img src={search} alt="search" />
            <a href="cart">Cart</a>
            <a href="login">Log In</a>
            <div className="header-button">
              <button>Try Free</button>
            </div>
            <div className="header-div-menu">
              <img onClick={toggleSidebar} src={menu} alt="menu" />
            </div>
          </div>
        </div>
      </div>
      <div className={`sidebar-backdrop ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-div-logo">
          <Link to={"/"} onClick={toggleSidebar}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="sidebar-div-ancer">
          <a href="app">App</a>
          <a href="services">Services</a>
          <a href="articles">Articles</a>
          <a href="cart">Cart</a>
          <a href="login">Log In</a>
        </div>
      </div>
    </div>
  );
}
