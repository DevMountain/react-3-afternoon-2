import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component{
  render() {
    return(
      <footer className='Footer__container'>
        <p id='Footer__copyright'>&copy;2017 DevMountain</p>
        <div></div>
        <p>Project by: <a href="https://github.com/mahburg" target="_blank" rel="noopener noreferrer">Lloyd Grubham</a> & <a href="https://github.com/brennongs" target="_blank" rel="noopener noreferrer">Brennon Schow</a></p>
      </footer>
    )
  }
}

export default Footer;