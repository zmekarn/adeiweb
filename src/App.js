import React, { Component } from 'react';
import logo from './logo.svg';
import ting from '../public/ting2.svg';
import bg from '../public/coding.jpg';
import './App.css';
import Logo from './icons/Logo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topbarSolid: false,
    };
  }

  componentDidMount() {
    console.log("suh")
    window.addEventListener('scroll', (ev) => {
      const { scrollY } = ev.path[1];
      if (scrollY > 0 && !this.state.topbarSolid) {
        console.log("ja");
        this.setState({topbarSolid: true});
      } else if (scrollY === 0 && this.state.topbarSolid) {
        console.log("nei");
        this.setState({topbarSolid: false})
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className={`topbar ${this.state.topbarSolid ? 'solid' : null}`}>
          <div className="topbar-logo">
            <Logo color={'white'} size={5} />
          </div>
          <div className="topbar-menu">
            <span>HOME</span>
            <span>ABOUT</span>
            <span>CONTACT</span>
          </div>
        </div>
        <div className="top">
          <span className="top-descr">We are ADEI</span>
        </div>
        <div className="bot"></div>
        <div>
          
        </div>
      </div>
    );
  }
}

export default App;
