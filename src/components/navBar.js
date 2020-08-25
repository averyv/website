import React from 'react';
// import { Layout, Typography } from 'antd';
// import { Link } from 'react-router-dom';

// const { Header } = Layout;
// const { Text } = Typography;

function NavBar(props) {
    let page = window.location.href;
    page = page.split('/#')[1];
    
    // page = page.split('/')
    if (page === 'home') {
        return (
            <nav className="navbar">
            <ul>
              <li><a id="active-nav" href='#home'>Home</a></li>
              <li><a href='#work'>Work</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </nav>
          );
    } else if (page === "work" || props.page === "work") {
        return (
            <nav className="navbar">
            <ul>
              <li><a href='#home'>Home</a></li>
              <li><a id="active-nav" href='#work'>Work</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </nav>
        );
    } else if (page === 'about') {
    return (
        <nav className="navbar">
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#work'>Work</a></li>
          <li><a id="active-nav" href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
      );}
  else {
    return (
        <nav className="navbar">
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#work'>Work</a></li>
          <li><a href='#about'>About</a></li>
          <li><a id="active-nav" href='#contact'>Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
