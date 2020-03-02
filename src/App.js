import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
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
                <span className="top-descr">ADEI</span>
                <span className="top-text">We commit</span>
              </div>
              <div className="top-button-container">
                <button onClick={scroll}>Contact us</button>
              </div>
              </div>
              {/* <div className="divider">
                <span className="quote">"Absorb what is useful, Discard what is not, Add what is uniquely your own."</span>
                <span className="quote-suffix">- Bruce Lee, 1961</span>
              </div> */}
              <div className="about-us flex-row">
                <div className="flex2 people flex-row">
                  <div className="person flex1 flex-column">
                    <img src={eirik} />
                    <span className="person-name">Eirik Eilertsen</span>
                    <span className="person-title">Junior Consultant</span>
                    <a href="mailto:eirik@adei.no" className="person-email">eirik@adei.no</a>
                  </div>
                  <div className="person flex1 flex-column">
                    <img src={magnus} />
                    <span className="person-name">Magnus Adler</span>
                    <span className="person-title">Senior Consultant</span>
                    <a href="mailto:magnus@adei.no" className="person-email">magnus@adei.no</a>
                  </div>
                </div>
                <div className="flex2 flex-column who-content">
                  <span className="who-header">Who are we?</span>
                  <span className="who-text">Vi er to bois som lever for det vi jobber med. Vi kan mye ting</span>
                </div>
              </div>
              <div className="what-we-do flex-column">
                <h1>What do we do?</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis maximus felis, a 
                venenatis elit. Nullam auctor elit in orci rhoncus, sed pharetra nisi sollicitudin. Vivamus
                 non libero id neque pellentesque ullamcorper sagittis sed lorem. Duis ac nunc neque. Cras 
                 viverra sollicitudin purus non malesuada. Ut a nunc lorem. Mauris euismod blandit nisi quis 
                 sagittis. Nulla facilisi. Phasellus viverra ac tortor sit amet aliquam. In condimentum lectus 
                 felis, id efficitur lacus maximus a. Integer et enim nunc.</span>
              </div>
              <div className="what-we-do flex-column">
                <h1>Some other category</h1>
                <span>Lorem s viverra ac tortor sit amet aliquam. In condimentum lectus 
                 felis, id efficitur lacus maximus a. Integer et enim nunc.</span>
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
                    <span className="contact-list-item-text"><a className="contact-list-item-link" href="tel:90400602">90400602</a> (Magnus Adler)</span>
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
