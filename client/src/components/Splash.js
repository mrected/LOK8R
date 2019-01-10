import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import logo from '../images/main-logo.svg'

class Splash extends Component {
  render() {
    return (
      <>
        <div className="container splash">
        
          <img src={logo} className="main-logo" alt="logo" />
        
          <p className="tagline">reconnect with someone <br />trying to reconnect with you</p>

          <Link to={`login`} className="big-btn">start searching...</Link>

        </div>
      </>
    )
  }
}

export default Splash
