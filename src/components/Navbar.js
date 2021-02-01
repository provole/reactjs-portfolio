import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../Assets/css/Navbar.min.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
     <>
      {/* <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}
    
    <div>
        <div className="navigation">
            <div className="navigation__logo">
                <Link to='/' className='' onClick={closeMobileMenu}>
                    <img src='images/logo.png' />
                </Link>
            </div>
            <div className="navigation__links">
                <ul>
                  <li className=''>
                      <Link to='/' className='nav-links link-home'>
                          <i className='fa fa-home' />
                      </Link>
                  </li>
                  <li className=''>
                      <Link to='/services' className='nav-links link-portfolio'>
                          <i className='fa fa-eye' />
                      </Link>
                  </li>
                  <li className=''>
                      <Link to='/about' className='nav-links link-about'>
                          <i className='fa fa-user-secret' />
                      </Link>
                  </li>
                </ul>
            </div>
            <div className="navigation__social">
                <ul>
                  <li className=''>
                      <Link to='/' className='nav-links'>
                          <i className='fa fa-github' />
                      </Link>
                  </li>
                  <li className=''>
                      <Link to='/' className='nav-links'>
                          <i className='fa fa-linkedin' />
                      </Link>
                  </li>
                  <li>
                      <a target="_blank" href="https://reactjs.org/" to='/' className='nav-links'>
                        <img src={"./images/logo.svg"} />
                      </a>
                  </li>
                </ul>
            </div>
        </div>
    </div>
    
    </>
  );
}

export default Navbar;
