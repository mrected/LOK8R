import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import logo from '../images/main-logo.svg'
import tempAuth from '../images/login-screen.jpg'

class Start extends Component {
  render() {
    return (
      <>
        <div className="container login">
          <img src={logo} className="main-logo" alt="logo" />
          <Link to={`enter_info_instruction`}>
            <img src={tempAuth} alt="auth goes here" className="temp-auth"/>
          </Link>
        </div>
      </>
    )
  }
}

export default Start
