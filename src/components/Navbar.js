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
                      <Link to='/work' className='nav-links link-portfolio'>
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
                      <a href="https://github.com/provole" className='nav-links' target="_blank">
                          <i className='fa fa-github' />
                      </a>
                  </li>
                  <li className=''>
                      <a href="https://www.linkedin.com/in/volenangelov/" className='nav-links' target="_blank">
                          <i className='fa fa-linkedin' />
                      </a>
                  </li>
                  <li>
                      <a title="Made with ReactJS" target="_blank" href="https://reactjs.org/" to='/' className='nav-links' target="_blank">
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
