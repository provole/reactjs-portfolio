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
                    <figure class="effect-layla">
						<img src="images/epitome_digital.png" alt="img06"/>
						<figcaption>
							<h2>Epitome <br />Digital</h2>
							<a href="https://epitome.digital/" target="_blank">View more</a>
						</figcaption>			
					</figure>
                </div>
                <div className="gridbox__item">
                    <figure class="effect-layla">
						<img src="images/pragmatic_digital.png" alt="img06"/>
						<figcaption>
							<h2>Pragmatic <br />Digital</h2>
							<a href="https://pragmaticdigital.co.uk/" target="_blank">View more</a>
						</figcaption>			
					</figure>
                </div>
                <div className="gridbox__item">
                    <figure class="effect-layla">
						<img src="images/michelin.png" alt="img06"/>
						<figcaption>
							<h2>Michelin </h2>
							<a href="https://marketing.michelin.co.uk/return_to_work/give-us-feedback.php" target="_blank">View more</a>
						</figcaption>			
					</figure>
                </div>
                <div className="gridbox__item">
                    <figure class="effect-layla">
						<img src="images/soampli.png" alt="img06"/>
						<figcaption>
							<h2>SoAmpli</h2>
							<a href="https://www.soampli.com/" target="_blank">View more</a>
						</figcaption>			
					</figure>
                </div>
                <div className="gridbox__item">
                    <figure class="effect-layla">
						<img src="images/invulnerables.png" alt="img06"/>
						<figcaption>
							<h2>Invulnerables<br />Esports</h2>
							<a href="http://invulesports.com/" target="_blank">View more</a>
						</figcaption>			
					</figure>
                </div>
                <div className="gridbox__item">
                    <figure class="effect-layla">
						<img src="images/force24.png" alt="img06"/>
						<figcaption>
							<h2>Force24 <br /> Tools</h2>
							<a href="http://frontendstaging.force24.co.uk/tools/" target="_blank">View more</a>
						</figcaption>			
					</figure>
                </div>
                <div className="gridbox__item">
                    <figure class="effect-layla">
						<img src="images/trunarrative.jpg" alt="img06"/>
						<figcaption>
							<h2>TruNarrative</h2>
							<a href="https://frontendstaging.force24.co.uk/trunarrative/" target="_blank">View more</a>
						</figcaption>			
					</figure>
                </div>
            </div>
        </div>
    </div>
  );
}
