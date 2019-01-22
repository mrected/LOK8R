import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'

import auth from '../auth'
import history from '../history'

import logo from '../images/main-logo.svg'

class EnterInfoInstruction extends Component {

  componentWillMount() {
    if(!auth.isAuthenticated()){
      history.replace('./Splash')
    }

    axios.get('/user').then(response => {
      this.props.saveUserChanges(response.data.user)
      this.props.saveSearchChanges(response.data.search)
    })

  }
  
  render() {
    return (
      <>
        <div className="container">
        
        <section className="enter-info">
        <img src={logo} className="main-logo" alt="logo" />
        <h1>enter your information</h1>
        <p>
            On the next screen you'll enter your personal information.<br />
            We'll use this information to search thru our database and compare 
            it to other users search criteria to see if there's any matches.
        </p>
        <p>
            Please fill out every field that applies to you.<br /> The more information you enter, the more accurate your search.
        </p>
        </section>

        <footer>
          {/* <p className="page">page 2 - your info</p> */}
          <nav className="footer-nav">
            <Link to={`exit`} className="small-btn">not yet</Link>
            <Link to={`enter_info1`} className="small-btn">ok -&gt;</Link>
          </nav>
        </footer>
        </div>
      </>
    )
  }
}

export default EnterInfoInstruction
