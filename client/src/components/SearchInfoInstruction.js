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
            Over the next 3 screens you'll enter information about the person you're looking for. 
            We'll use this to help find them in our database.
        </p>
        <p>
            Fill out any field you can. Obviously you will probably be missing some information, 
            but the more you can provide the more likely we'll find them.
        </p>
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
