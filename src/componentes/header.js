import React, { Component } from 'react';
import cine from './cinemex.jpg';
import '../App.css'

class Header extends Component
{
    render()
    {
        return(
            <div className="App-header">
          {<img style={{height: '10vh', alignitems: 'center'}} src={cine} className="Logo" alt="logo" />}
            </div>
            
        );
    }
}
export default Header;