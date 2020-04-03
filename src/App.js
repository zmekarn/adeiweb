import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import { faPhone, faEnvelope, faTools } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    const scroll = () => {
      document.getElementById("socials").scrollIntoView({
        behavior: 'smooth'
      })
    }
    return (
      <Router>
        <div className="App">
          <div className={`topbar${this.state.topbarSolid ? ' solid' : ''}`}>
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
                  <span className="top-descr">Delivering high quality code and teamwork to our customers</span>
                  <span className="top-text">Something something something</span>
                </div>
                <div className="top-button-container">
                  <button onClick={scroll}>Contact us</button>
                </div>
              </div>
              <div className="what-we-do flex-column">
                <h1>THE IDEA</h1>
                <hr />
                <span>We deliver high quality code to our customers. ADEI is a small consultancy located in the Oslo area. The company was founded in March 2020 with a mission to deliver high quality work and engagement
                    to our customers.</span>
              </div>
              <div className="what-we-do flex-column">
                <h1>THE MOTIVATION</h1>
                <hr />
                <span>Our passion for our work is what makes Adei special. We believe that by keeping a small but well *something* team, we can give our customers
                the engagement and passion of a regular in-house team.</span>
              </div>
              <div className="about-us flex-row">
                <div className="flex2 people flex-row">
                  <div className="person flex1 flex-column">
                    <img src={eirik} alt=""/>
                    <span className="person-name">Eirik Eilertsen</span>
                    <span className="person-title">Co-founder, Senior Consultant</span>
                    <span className="person-title">Full-stack developer</span>
                    <a href="mailto:eirik@adei.no" className="person-email">eirik@adei.no</a>
                  </div>
                  <div className="person flex1 flex-column">
                    <img src={magnus} alt=""/>
                    <span className="person-name">Magnus Adler</span>
                    <span className="person-title">Co-founder, Senior Consultant</span>
                    <span className="person-title">Full-stack developer</span>
                    <a href="mailto:magnus@adei.no" className="person-email">magnus@adei.no</a>
                  </div>
                </div>
                <div className="flex2 flex-column who-content">
                  <span className="who-header">WHO ARE WE?</span>
                  <hr />
                  <span className="who-text">
                    ADEI is a small consultancy located in the Oslo area. The company was founded in March 2020 with a mission to deliver high quality work and engagement
                    to our customers.
                  </span>
                </div>
              </div>
              <div id="socials" className="contact-us">
                <h1>Contact Information</h1>
                <div className="contact-list">
                  <div className="contact-list-item">
                    <FontAwesomeIcon className="contact-list-item-icon" icon={faEnvelope} />
                    <a className="contact-list-item-link" href="mailto:hello@adei.no">hello@adei.no</a>
                  </div>
                  <div className="contact-list-text">
                    <FontAwesomeIcon className="contact-list-item-icon" icon={faPhone} />
                    <span className="contact-list-item-text">
                      <a className="contact-list-item-link" href="tel:90400602">90400602</a> / <a className="contact-list-item-link" href="tel:99507882">99507882</a>
                         <span> (Magnus Adler / Eirik Eilertsen)</span>
                      </span>
                  </div>                  
                </div>
                <div className="socials">
                  <a className="socials-link" href=""><FontAwesomeIcon className="socials-icon" icon={faFacebookSquare} /></a>
                  <a className="socials-link" href=""><FontAwesomeIcon className="socials-icon" icon={faLinkedin} /></a>
                </div>
              </div>
              
            </Route>
            <Route exact path="/portfolio">
              <div className="portfolio-body">
                <FontAwesomeIcon className="under-construction-icon" icon={faTools} />
                <span className="under-construction-text">This page is under construction</span>
              </div>
            </Route>
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
