import React from 'react';
import { Link } from "react-router-dom";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheckCircle, faCode, faServer, faToolbox, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import CustomFooter from './components/footer';

/*
Smooth scroll inspired by following YouTube video: https://www.youtube.com/watch?v=y9nlfqT4s9s
Corresponding code posted at https://github.com/cferdinandi/smooth-scroll
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedAll: true,
      clickedWeb: false,
      clickedMobile: false,
      fullWorkDict: [
        {title: 'ValYou',link:'valyou',image:"./img/valyouScreenshot.png", platform: 'mobile', description: 'ValYou: sometimes it IS about you', current: false, date: 'Jan. 2020 - June 2020'},
        {title: 'VibeDiner',link:'vibe-diner',image:'./img/vibeDinerHomeBlack.png', platform: 'web', description: 'VibeDiner: web app that facilitates musical collaboration', current: false, date: 'May 2019 - June  2019'},
        {title: 'Full-Stack Blog',link:'blog',image:'./img/blogHomeBlack.png', platform: 'web', description: 'Blog: full-stack blog platform', current: false, date: 'Apr. 2019 - May 2019'},
        {title: 'Landing Page',link:'landing-page',image:'./img/landingPageHomeBlack.png', platform: 'web', description: 'Landing page: pure HTML & CSS landing page', current: false, date: 'Apr. 2019'},
        {title: 'Small World',link:'small-world',image:'./img/smallWorldLogoBlack.png', platform: 'mobile', description: 'Small World: connecting people, connecting places', current: true, date: 'July 2020 - Present'},
        {title: 'Shrink',link:'shrink',image:'./img/shrinkHome.png', platform: 'web', description: "Shrink: find the therapist that's right for you", current: true, date: 'July 2020 - Present'}
      ],
      filteredWorkDict: [
        {title: 'ValYou',link:'valyou',image:"./img/valyouScreenshot.png", platform: 'mobile', description: 'ValYou: sometimes it IS about you', current: false, date: 'Jan. 2020 - June  2020'},
        {title: 'VibeDiner',link:'vibe-diner',image:'./img/vibeDinerHomeBlack.png', platform: 'web', description: 'VibeDiner: web app that facilitates musical collaboration', current: false, date: 'May 2019 - June  2019'},
        {title: 'Full-Stack Blog',link:'blog',image:'./img/blogHomeBlack.png', platform: 'web', description: 'Blog: full-stack blog platform', current: false, date: 'Apr. 2019 - May 2019'},
        {title: 'Landing Page',link:'landing-page',image:'./img/landingPageHomeBlack.png', platform: 'web', description: 'Landing page: pure HTML & CSS landing page', current: false, date: 'Apr. 2019'},
        {title: 'Small World',link:'small-world',image:'./img/smallWorldLogoBlack.png', platform: 'mobile', description: 'Small World: connecting people, connecting places', current: true, date: 'July 2020 - Present'},
        {title: 'Shrink',link:'shrink',image:'./img/shrinkHome.png', platform: 'web', description: "Shrink: find the therapist that's right for you", current: true, date: 'July 2020 - Present'}
      ]
    }
    this.setToAll = this.setToAll.bind(this);
    this.setToWeb = this.setToWeb.bind(this);
    this.setToMobile = this.setToMobile.bind(this);
  }

  componentDidMount() {
    let page = window.location.href;

    if (page.split('/#').length > 1) {
      page = page.split('/#')[1];
      var elmnt = document.getElementById(page);
      elmnt.scrollIntoView();
    }
    
  }

  componentDidUpdate() {
    let page = window.location.href;
    console.log(page);
    if (page.split('/#').length > 1) {
      page = page.split('/#')[1];
    var elmnt = document.getElementById(page);
    elmnt.scrollIntoView();
    }
  }

  setToAll() {
    this.setState({clickedAll: true, clickedWeb: false, clickedMobile: false, filteredWorkDict: this.state.fullWorkDict});
  }

  setToWeb() {
    let filteredDict = [...this.state.fullWorkDict].filter((e) => {return e.platform === 'web'});
    this.setState({clickedAll: false, clickedWeb: true, clickedMobile: false, filteredWorkDict: filteredDict});
  }

  setToMobile() {
    let filteredDict = [...this.state.fullWorkDict].filter((e) => {return e.platform === 'mobile'});
    this.setState({clickedAll: false, clickedWeb: false, clickedMobile: true, filteredWorkDict: filteredDict});
  }

  renderNavBar() {
    return (
      <nav className="navbar">
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#work'>Work</a></li>
          <li><a href='#about'>About</a></li>
          
        </ul>
      </nav>
    )
  }
  
  renderButtonSection() {
    return (
      <div id="button-section">
        <button className={this.state.clickedAll ? "activeButton" : "inactiveButton"} onClick={this.setToAll}>All</button> 
        <button className={this.state.clickedWeb ? "activeButton" : "inactiveButton"} onClick={this.setToWeb}>Web</button>
        <button className={this.state.clickedMobile ? "activeButton" : "inactiveButton"} onClick={this.setToMobile}>Mobile</button>  
      </div>
    )
  }

  renderWorkGrid() {
    return this.state.filteredWorkDict.map((value, index) => {
      return (
        <div className="work-container">
          <div className="image-container">
            <img alt={value.link + "logo"} src={require("" + value.image + "")}/>
            <div id="fade-in-content">
              <p id="project-description-1">{value.description.split(':')[0]}</p>
              <p id="project-description-2">{value.description.split(':')[1]}</p>
              <Link to={"/"+value.link}><p id="project-description-button">Learn More</p></Link>
          </div> 
          {value.current ? 
            <div id="current-icon-container">
              <FontAwesomeIcon id="current-icon" icon={faSpinner} /> 
              <p id="current-icon-text">{value.date}</p>
            </div>: <div id="current-icon-container">
              <FontAwesomeIcon id="current-icon" icon={faCheckCircle} /> 
              <p id="current-icon-text">{value.date}</p>
            </div> }
          </div>
        </div>
      )
    })
  }
  
  render() {
    return (
      <body>
        <div className="App">
          {this.renderNavBar()}
          <section id="home">
            <h1>Avery Vanacore</h1>
          </section>
          <section id="work">
            {this.renderButtonSection()}
            <div id="work-grid">
              {this.renderWorkGrid()}
            </div>
          </section>
          <section id="about">
            <div id="about-header">
              <img alt="personal" src={require("./img/personal-photo.jpg")} />
            <div>
            <h1>Avery Vanacore</h1>
            <p>I am a recent graduate of Dartmouth College, where I studied Computer Science modified with Economics.
                I am hoping to pursue a career in software development, 
                as I have loved the coding experience I have gotten through my courses at Dartmouth, my internships, and my individual projects.
                In particular, I am drawn towards front-end programming and web development.
            </p>
            <div className="social-icon-container">
              <a href="https://www.linkedin.com/in/avery-vanacore/">
                <FontAwesomeIcon icon={faLinkedin}/> 
              </a>
              <a href="https://github.com/averyv/">
                <FontAwesomeIcon icon={faGithub}/> 
              </a>
              <a href="mailto:averyvanacore@gmail.com">
                <FontAwesomeIcon icon={faEnvelope}/>
              </a>
            </div>
          </div>
        </div>
        <div id="about-content">
          <div>
            <p id="my-skills">my skills</p>
          </div>
          <div className="skill-section-container">
            <div className="skill-section" id="front-end-skills">
              <div className="skill-section-header">
                <FontAwesomeIcon icon={faCode} id="code-icon"/> 
                <p>front end</p>
              </div>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>React Native</li>
              </ul>
            </div>
            <div className="skill-section" id="back-end-skills">
              <div className="skill-section-header">
                <FontAwesomeIcon icon={faServer} id="server-icon"/> 
                <p>back end</p>
                </div>
              <ul>
                <li>Express</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>Mongoose</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="skill-section" id="other-skills">
              <div className="skill-section-header">
                <FontAwesomeIcon icon={faToolbox} id="toolbox-icon"/> 
                <p>other</p>
                </div>
              <ul>
                <li>Github</li>
                <li>Zenhub</li>
                <li>Terminal</li>
                <li>Figma</li>
                <li>Webflow</li>
                <li>Microsoft Office</li>
              </ul>
            </div>
          </div>
        </div>
        <CustomFooter/>
        </section>
      </div>
    </body>
  );
  }
}

export default App;
