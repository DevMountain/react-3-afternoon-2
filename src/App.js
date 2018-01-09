import React, { Component } from 'react';
import './App.css';

// Router
import router from './utils/router';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        { router }

        <Footer />
      </div>
    );
  }
}

export default App;
