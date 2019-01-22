import React, { Component } from 'react'
import { Link} from 'react-router-dom'

import auth from '../auth'
import history from '../history'

import logo from '../images/main-logo.svg'

class Exit extends Component {

  componentWillMount() {
    if(!auth.isAuthenticated()){
      history.replace('./splash')
    }
  }
  
  render() {
    return (
      <>
        <div className="container">
          <section className="clarification">
            <img src={logo} className="main-logo" alt="logo" />
            <h1>no problem</h1>
            <p>
                Feel free to close the app and come back<br /> whenever you want to start searching again.
            </p>

            <p>Close the app or click back</p>
            
          </section>
          <footer>
            <nav className="footer-nav">
              <Link to={`logout`} className="small-btn">logout</Link>
              <Link to={`enter_info_instruction`} className="small-btn">go back to enter your info</Link>
            </nav>
          </footer>
        </div>
      </>
    )
  }
}

export default Exit
