import React, { Component } from 'react';

class Footer extends Component{
    
    render(){
        return(
            <footer className='app-footer' >
                <p id='copy-right'>&copy;2017 DevMountain</p>
                <div></div>
                <p>Project by: <a className='gh' href="https://github.com/mahburg" target="_blank">Lloyd Grubham</a> & <a className='gh'  href="https://github.com/brennongs" target="_blank">Brennon Schow</a></p>
            </footer>
        )
    }
}

export default Footer;