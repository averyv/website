import React from 'react';
import { Layout } from 'antd';
import {Link } from "react-router-dom";
import valYou from './components/valYou';
import NavBar from './components/navBar';
import logo from './logo.svg';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

// https://www.youtube.com/watch?v=y9nlfqT4s9s

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedAll: true,
      clickedWeb: false,
      clickedMobile: false,
      fullWorkDict: [
        {title: 'ValYou',link:'valyou',image:"./img/valyouScreenshot.png", platform: 'mobile', description: 'ValYou: team-based two-term project for CS98', visible: true},
        {title: 'VibeDiner',link:'vibe-diner',image:'./img/vibeDinerHomeBlack.png', platform: 'web', description: 'VibeDiner: Team-based final project for CS52 Full-Stack Web Development', visible: true},
        {title: 'Full-Stack Blog',link:'blog',image:'./img/blogHomeBlack.png', platform: 'web', description: 'Blog: full-stack blog platform', visible: true},
        {title: 'Landing Page',link:'landing-page',image:'./img/landingPageHomeBlack.png', platform: 'web', description: 'Landing page: pure HTML & CSS landing page', visible: true},
        {title: 'Small World',link:'small-world',image:'./img/smallWorldLogoBlack.png', platform: 'mobile', description: 'Small World: React Native phone application', visible: false},
        {title: 'Shrink',link:'shrink',image:'./img/shrinkHome.png', platform: 'web', description: 'Shrink: Team-based two-term project for CS98', visible: false}
      ],
      filteredWorkDict: [
        {title: 'ValYou',link:'valyou',image:"./img/valyouScreenshot.png", platform: 'mobile', description: 'ValYou: team-based two-term project for CS98', visible: true},
        {title: 'VibeDiner',link:'vibe-diner',image:'./img/vibeDinerHomeBlack.png', platform: 'web', description: 'VibeDiner: Team-based final project for CS52 Full-Stack Web Development', visible: true},
        {title: 'Full-Stack Blog',link:'blog',image:'./img/blogHomeBlack.png', platform: 'web', description: 'Blog: Full-stack blog platform', visible: true},
        {title: 'Landing Page',link:'landing-page',image:'./img/landingPageHomeBlack.png', platform: 'web', description: 'Landing page: pure HTML & CSS landing page', visible: true},
        {title: 'Small World',link:'small-world',image:'./img/smallWorldLogoBlack.png', platform: 'mobile', description: 'Small World: React Native phone application', visible: false},
        {title: 'Shrink',link:'shrink',image:'./img/shrinkHome.png', platform: 'web', description: 'Shrink: Team-based two-term project for CS98', visible: false}
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
              </div>
              {/* <div className="title-container">
                <p>{value.title}</p>
              </div> */}
          </div>

      )
    })
  }
  
  render() {
  return (
    <body>
    <div className="App">
      <NavBar page="home"/>
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
            <p>I am a senior at Dartmouth College studying Computer Science modified with Computer Science.
                I am graduating in June and am hoping to pursue a career in software development, 
                as I have loved the coding experience I have gotten through my courses at Dartmouth, my internships, and my individual projects.
                In particular, I am drawn towards front-end programming and web development.
            </p>
          </div>
        </div>
        <div id="about-content">
          <div className="skill-section" id="front-end-skills">
            <p>front end</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React</li>
            </ul>
          </div>
          <div className="skill-section" id="back-end-skills">
            <p>back end</p>
            <ul>
              <li>Express</li>
              <li>Python</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="skill-section" id="other-skills">
            <p>other</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="contact">
        <h1>contact</h1>
        <p>wow</p>
      </section>

    </div>
    </body>
  );
  }
}

export default App;
