import React, { Component } from 'react';
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
            <Logo color={'white'} size={6.5} />
          </div>
          <div className="topbar-menu">
            <span>HOME</span>
            <span>ABOUT</span>
            <span>CONTACT</span>
          </div>
        </div>
        <div className="top">
          <span className="top-descr">We are ADEI</span>
          <span className="top-text">Vi er de beste konsulentene i hele verden. Lei oss og gi oss mye spenn. Vi kan mange programmeringsspråk og vil gjerne lære flere og. Så lenge det ikke er knockout.js</span>
        </div>
        <div className="bot"></div>
        <div>
          
        </div>
      </div>
    );
  }
}

export default App;
