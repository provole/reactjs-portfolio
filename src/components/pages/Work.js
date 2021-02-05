import React from 'react';
import '../../App.css';
import './../../Assets/css/Layout.min.css';
import Particles from 'react-particles-js';

export default function Work() {
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
        <div className="my-work">
            <div className="gridbox">
                <div className="gridbox__item">
                    <img src="https://picsum.photos/400/300" />
                </div>
                <div className="gridbox__item">
                    <img src="https://picsum.photos/400/300" />
                </div>
                <div className="gridbox__item">
                    <img src="https://picsum.photos/400/300" />
                </div>
                <div className="gridbox__item">
                    <img src="https://picsum.photos/400/300" />
                </div>
                <div className="gridbox__item">
                    <img src="https://picsum.photos/400/300" />
                </div>
                <div className="gridbox__item">
                    <img src="https://picsum.photos/400/300" />
                </div>
                <div className="gridbox__item">
                    <img src="https://picsum.photos/400/300" />
                </div>
            </div>
            
        </div>
    </div>
  );
}
