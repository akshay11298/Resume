import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import { Footer } from './Footer';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <div className={'App'} style={{ minHeight: '100%' }}>
          <Content />
        </div>
        <Footer />
        <div style={{ height: '20px' }} />
      </div>
    );
  }
}

export default App;
