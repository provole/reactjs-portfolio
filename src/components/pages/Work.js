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
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/6.jpg" alt="img06"/>
						<figcaption>
							<h2>Epitome <br />Digital</h2>
							<a href="https://epitome.digital/">View more</a>
						</figcaption>			
					</figure>
                </div>
                <div className="gridbox__item">
                    <figure class="effect-layla">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/26.jpg" alt="img06"/>
						<figcaption>
							<h2>Pragmatic <br />Digital</h2>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
                </div>
                <div className="gridbox__item">
                    <figure class="effect-layla">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/24.jpg" alt="img06"/>
						<figcaption>
							<h2>Michelin </h2>
							<a href="https://marketing.michelin.co.uk/return_to_work/give-us-feedback.php">View more</a>
						</figcaption>			
					</figure>
                </div>
                <div className="gridbox__item">
                    <figure class="effect-layla">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/23.jpg" alt="img06"/>
						<figcaption>
							<h2>SoAmpli</h2>
							<a href="https://www.soampli.com/">View more</a>
						</figcaption>			
					</figure>
                </div>
                <div className="gridbox__item">
                    <figure class="effect-layla">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/22.jpg" alt="img06"/>
						<figcaption>
							<h2>Force24 <br /> Tools</h2>
							<a href="http://frontendstaging.force24.co.uk/tools/">View more</a>
						</figcaption>			
					</figure>
                </div>
                <div className="gridbox__item">
                    <figure class="effect-layla">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/21.jpg" alt="img06"/>
						<figcaption>
							<h2>TruNarrative</h2>
							<a href="https://frontendstaging.force24.co.uk/trunarrative/">View more</a>
						</figcaption>			
					</figure>
                </div>
                <div className="gridbox__item">
                    <figure class="effect-layla">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/20.jpg" alt="img06"/>
						<figcaption>
							<h2>PRAGMATIC <br /><span>DIGITAL</span></h2>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
                </div>
            </div>
        </div>
    </div>
  );
}
