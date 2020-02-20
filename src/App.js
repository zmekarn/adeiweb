import React, { Component } from 'react';
import './App.css';
import Logo from './icons/Logo';
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
                <span className="top-descr">We are ADEI</span>
                <span className="top-text">Vi er de beste konsulentene i hele verden. Lei oss og gi oss mye spenn. Vi kan mange programmeringsspråk og vil gjerne lære flere og. Så lenge det ikke er knockout.js</span>
              </div>
              <div className="bot">
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
