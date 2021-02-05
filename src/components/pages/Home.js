import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
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
    </div>
  );
}

export default Home;
