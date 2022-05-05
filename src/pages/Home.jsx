import React from 'react'


// Import Images
import ImgEcommerce from '../sass/img/ecommerce.JPG'
import ImgWeatherapp from '../sass/img/weather-app.JPG'
import ImgChatapp from '../sass/img/chat-app.JPG'

function Home() {
  return (
    <div className='page-home'>
        <div className="hero">
            <div className="titles">
                <h2>Développeur Full-Stack</h2>
                <h3>React.js | Node.js</h3> 
            </div>

            <p>Depuis maintenant 1 an, je me forme en auto-didacte sur les technologie du web. Je m’interesse particulièrement au développement d’applications front-end avec React et son écosystème.</p>

            <div className="separator"></div>

            <div className="scroll-effect">
                <div className="ball"></div>
            </div>
        </div>

        <div className="projects">
            <div className="title">
                <h3>Projets</h3>
                <div className="separator"></div>
            </div>

            <div className="container">
                <div className="card">
                    <img src={ImgEcommerce} alt="" />
                    <p>E-commerce App - React.js | Redux</p>
                    <a href="https://sylvaintrs.github.io/ecommerce-app/" target="_blank"><button>Découvrir</button></a>
                </div>
                <div className="card">
                    <img src={ImgWeatherapp} alt="" />
                    <p>Weather App - React.js | Axios</p>
                    <a href="https://sylvaintrs.github.io/weather-app/" target="_blank"><button>Découvrir</button></a>
                </div>
                <div className="card">
                    <img src={ImgChatapp} alt="" />
                    <p>Chat App - React.js | Node.js | Express</p>
                    <a href="https://sylvaintrs.github.io/chat-app--frontend/" target="_blank"><button>Découvrir</button></a>
                </div>
            </div>
        </div>

        <div className="stacks">
            <h3>Mes compétences</h3>
            <div className="container">
                <div className="card">
                    <p>01</p>
                    <div className="separator"></div>
                    <h4>Principales</h4>
                    <ol>
                        <li>React.js</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                        <li>SASS</li>
                        <li>Axios</li>
                    </ol>
                </div>
                <div className="card">
                    <p>02</p>
                    <div className="separator"></div>
                    <h4>Design</h4>
                    <ol>
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                        <li>Figma</li>
                    </ol>
                </div>
                <div className="card">
                    <p>03</p>
                    <div className="separator"></div>
                    <h4>Divers</h4>
                    <ol>
                        <li>Git / Github</li>
                        <li>UX / UI</li>
                        <li>SEO</li>
                    </ol>
                </div>
            </div>
        </div>

        <div className="contact">
            <div className="container">
                <h3>Me contacter:</h3>
                <p>sylvain.tremblais41@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Home