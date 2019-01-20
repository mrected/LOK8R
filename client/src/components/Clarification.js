import React, { Component } from 'react'
import { Link} from 'react-router-dom'

import auth from '../auth'
import history from '../history'

import logo from '../images/main-logo.svg'

class Clarification extends Component {

  componentWillMount() {
    if(!auth.isAuthenticated()){
      history.replace('./Splash')
    }
  }

  render() {

    return (
      <>
        <div className="container">
        <section className="clarification">
        <img src={logo} className="main-logo" alt="logo" />
        <p>this is probably the person you're looking for</p>
        <p>these areas matched your search criteria:</p>
        <ul>
          <li>first name: <span className="data">{this.props.results.user_first}</span></li>
          <li>nickname: <span className="data">{this.props.results.user_alias}</span></li>
          <li>last name: <span className="data">{this.props.results.user_last}</span></li>
          <li>gender: <span className="data">{this.props.results.user_gender}</span></li>
          <li>born: <span className="data">{this.props.results.user_birth_year}</span></li>
          <li>relation: <span className="data">{this.props.results.user_birth_month}</span></li>
          <li>birth state: <span className="data">{this.props.results.user_birth_state}</span></li>
        </ul>
        <p>do you think this is a match?</p>
        </section>
        <footer>
          <nav className="footer-nav">
            <Link to={`matches`} className="small-btn"> &lt;- back</Link>
            <Link to={`closing`} className="small-btn">yes -&gt;</Link>
          </nav>
          </footer>
        </div>
      </>
    )
  }
}

export default Clarification

