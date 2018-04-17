import React, { Component } from 'react';
import './App.css';
import Content from "./Content";
import {Footer} from "./Footer";

class App extends Component {
  render() {
    return (
        <div style={{margin:'0 auto'}} className={"App"}>
          <div className="Site-content">
            <Content/>
          </div>

            <Footer/>
        </div>
    );
  }
}

export default App;
