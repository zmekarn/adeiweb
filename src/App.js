import React, { Component } from 'react';
import './App.css';
import Logo from './icons/Logo';
import eirik from '../public/eirik_png2.png';
import magnus from '../public/magnus2.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topbarSolid: false,
    };
  }

  componentDidMount() {
    document.title = "ADEI"
    window.addEventListener('scroll', (ev) => {
      const { scrollY } = ev.path[1];
      if (scrollY > 0 && !this.state.topbarSolid) {
        this.setState({topbarSolid: true});
      } else if (scrollY === 0 && this.state.topbarSolid) {
        this.setState({topbarSolid: false})
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className={`topbar ${this.state.topbarSolid ? 'solid' : null}`}>
            <div className="topbar-logo">
              <Logo color={'white'} size={6.5} />
            </div>
            <div className="topbar-menu">
              <Link to="/">
                <span>HOME</span>
              </Link>
              <Link to="/portfolio">
                <span>PORTFOLIO</span>
              </Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <div className="top">
              <div className="flex-column top-left">
                <span className="top-descr">We are ADEI</span>
                <span className="top-text">Vi er de beste konsulentene i hele verden. Lei oss og gi oss mye spenn. Vi kan mange programmeringsspråk og vil gjerne lære flere og. Så lenge det ikke er knockout.js</span>
              </div>
              <div className="top-button-container">
                <button>Contact us</button>
              </div>
              </div>
              <div className="about-us flex-row">
                <div className="flex2 people flex-row">
                  <div className="person flex1">
                    <img src={eirik} />
                  </div>
                  <div className="person flex1">
                    <img src={magnus} />
                  </div>
                </div>
                <div className="flex2 flex-column who-content">
                  <span className="who-header">Who are we?</span>
                  <span className="who-text">Vi er to bois som liker å progge. Vi trenger mye spenn så vi kan kjøpe oss fete biler og kødde rundt.</span>
                </div>
              </div>
            </Route>
            <Route exact path="/portfolio">
              <div className="portfolio-body"></div>
            </Route>
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
