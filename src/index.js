import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import ValYou from './components/valYou';
import Blog from './components/blog';
import LandingPage from './components/landingPage';
import VibeDiner from './components/vibeDiner';
import SmallWorld from './components/smallWorld';
import Shrink from './components/shrink';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/valYou" component={ValYou}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/landing-page" component={LandingPage}/>
        <Route path="/vibe-diner" component={VibeDiner}/>
        <Route path="/small-world" component={SmallWorld}/>
        <Route path="/shrink" component={Shrink}/>
      </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
