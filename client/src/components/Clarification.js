import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class Clarification extends Component {

  render() {
    console.log(this.props.
    return (
      <>
        <div className="container">
        <section className="clarification">
        <img src={logo} className="main-logo" alt="logo" />
        <p>this is probably the person you're looking for</p>
        <p>these areas matched your search criteria:</p>
        <ul>
          <li>first name: <span className="data">{this.props.searchInfo.first_name}</span></li>
          <li>last name: <span className="data">{this.props.searchInfo.last_name}</span></li>
          <li>gender: <span className="data">{this.props.searchInfo.gender}</span></li>
          <li>born: <span className="data">{this.props.searchInfo.year_born}</span></li>
          <li>relation: <span className="data">{this.props.searchInfo.they_are_to_you}</span></li>
          <li>reason for separation: <span className="data">{this.props.searchInfo.reason_for_separation}</span></li>
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

