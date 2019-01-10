import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class Clarification extends Component {
  render() {
    return (
      <>
        <div className="container">
        <section className="clarification">
        <img src={logo} className="main-logo" alt="logo" />
        <p>this is probably the person you're looking for</p>
        <p>these areas matched your search criteria:</p>
        <ul>
          <li>first name: <span className="data">michaela</span></li>
          <li>last initial: <span className="data">m</span></li>
          <li>gender: <span className="data">f</span></li>
          <li>age: <span className="data">24</span></li>
          <li>mothers name: <span className="data">jeanette</span></li>
          <li>relation: <span className="data">daughter</span></li>
          <li>reason for separation: <span className="data">adoption</span></li>
          <li>last seen: <span className="data">1996</span></li>
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
