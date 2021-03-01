import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';

function Home() {
  return (
    <div>
        <div id="tsparticles__">
            <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} />
        </div>
        <div className="home_page">
            <h1>Hi,<br />I'm <span>Volen</span>.</h1>
            <p><span>Front End Developer</span></p>
            <p>Click here to view some of my <Link to='/work'>work</Link> or learn more <Link to='/about'>about me</Link>.</p>
        </div>
    </div>
  );
}

export default Home;
