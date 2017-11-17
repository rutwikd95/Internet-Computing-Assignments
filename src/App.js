import React, { Component } from 'react';

import styles from './cssfile.css';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Maincontent from './components/maincontent';
import Navbar from './components/navbar';
//import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Maincontent />
      <Navbar />
          <Footer />
      </div>
  
    );
  }
}

export default App;
