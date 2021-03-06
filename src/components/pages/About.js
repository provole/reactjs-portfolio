import React from 'react';
import '../../App.css';
import Particles from 'react-particles-js';

export default function Products() {
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
        <div className="about_me">
            <h1>About me.</h1>
            <p>
                I am an ambitious and determined web developer who specialises in building intuitive websites and strives to please the client's needs on time. I hold a Bachelors degree in Web Technologies from the University of Huddersfield and currently work full-time as a Front End Developer with 5+ years of agency experience. <br /><br />

                Looking for a position where I can work with like-minded individuals and advance my skills in development.<br /><br />

            </p>
            <div className="about_me--resume">
                <a href="pdf/CV_Volen_Angelov.pdf" target="_blank">DOWNLOAD RESUME AS A PDF FORMAT</a>
            </div>
            <div className="about_me--skillset">
                <div className="skill-box">
                    <p>
                        Skills:
                    </p>
                    <h6>HTML5</h6>
                    <h6>CSS3</h6>
                    <h6>SASS</h6>
                    <h6>JavaScript</h6>
                    <h6>jQuery</h6>
                    <h6>WordPress</h6>
                    <h6>Email Development</h6>
                    <h6>Bootstrap 3/4</h6>
                    <h6>Gulp</h6>
                    <h6>SQL</h6>
                    <h6>PHP</h6>
                    <h6 class="in-progress">ReactJS<span className="tooltiptext">Work in Progress</span></h6>
                </div>
                <div className="tool-box">
                    <p>
                        Tools:
                    </p>
                    <h6>Version Control</h6>
                    <h6>Adobe Suite</h6>
                    <h6>Visual Studio Code</h6>
                    <h6>Jira</h6>
                    <h6>NPM</h6>
                    <h6>GitHub/Bitbucket</h6>
                    <h6>Freshdesk</h6>
                    <h6>Slack</h6>
                </div>
            </div>
        </div>
    </div>
  );
}
