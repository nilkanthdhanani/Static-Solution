import React, { useState, useEffect, useRef } from 'react';
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

  const appsDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const articlesDropdownRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleAppsDropdown = () => {
    setIsAppsDropdownOpen(!isAppsDropdownOpen);
    setIsServicesDropdownOpen(false);
    setIsArticlesDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsAppsDropdownOpen(false);
    setIsArticlesDropdownOpen(false);
  };

  const toggleArticlesDropdown = () => {
    setIsArticlesDropdownOpen(!isArticlesDropdownOpen);
    setIsAppsDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (appsDropdownRef.current && !appsDropdownRef.current.contains(event.target)) {
      setIsAppsDropdownOpen(false);
    }
    if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
      setIsServicesDropdownOpen(false);
    }
    if (articlesDropdownRef.current && !articlesDropdownRef.current.contains(event.target)) {
      setIsArticlesDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <div onClick={toggleAppsDropdown} className="header-div-ancer" ref={appsDropdownRef}>
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
            <div onClick={toggleServicesDropdown} className="header-div-ancer" ref={servicesDropdownRef}>
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
            <div onClick={toggleArticlesDropdown} className="header-div-ancer" ref={articlesDropdownRef}>
              <Link>Articles</Link>
              <Dropdown />
              {isArticlesDropdownOpen && (
                <div className="header-div-drop2">
                  <div className="header-div-drop-list">
                    <li>
                      <a href="/">Website Design</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="/">Email Design</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="/">Website Examples</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="/">Email Marketing</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="/">Website Tools</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="/">Email Tools</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="/">Bootstrap</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="/">Resources</a>
                      <GreaterThan />
                    </li>
                    <li>
                      <a href="/">View All Articles</a>
                      <GreaterThan />
                    </li>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="header-div-last">
            <img src={search} alt="search" />
            <a href="/">Cart</a>
            <a href="/">Log In</a>
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
          <a href="/">App</a>
          <a href="/">Services</a>
          <a href="/">Articles</a>
          <a href="/">Cart</a>
          <a href="/">Log In</a>
        </div>
      </div>
    </div>
  );
}
