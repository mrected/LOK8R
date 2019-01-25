import React, { Component } from 'react'
import { Link} from 'react-router-dom'

import auth from '../auth'
import history from '../history'

import logo from '../images/main-logo.svg'

class SearchInfoInstruction extends Component {

  componentWillMount() {
    if(!auth.isAuthenticated()){
      history.replace('./Splash')
    }
  }
  
  render() {
    return (
      <>
        <div className="container">
        <section className="enter-info">
        <img src={logo} className="main-logo" alt="logo" />
        <h1>their information</h1>
        <p>
            On the next screen you'll enter information about the person you're looking for.
        </p>
        <p>
            Fill out any field you can.
            The more information you can provide the more likely you'll find them.
        </p>
        <p className="page">page 3</p>
        </section>
        <footer>
          <nav className="footer-nav">
            <Link to={`enter_info1`} className="small-btn"> &lt;- back</Link>
            <Link to={`search_info1`} className="small-btn">ok -&gt;</Link>
          </nav>
          </footer>
        </div>
      </>
    )
  }
}

export default SearchInfoInstruction
