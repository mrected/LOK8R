import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class MatchedInfo extends Component {
  render() {
    return (
      <>
        <div className="container ">
          <section className="matches">
            <img src={logo} className="main-logo" alt="logo" />
            <p>These people match your search criteria. <br /> Select the one you think is more likely who you're looking for</p>

            <Link to={`clarify`} className="big-btn">
              Kayla M. <br />
              Age 24
            </Link>

            <Link to={`clarify`} className="big-btn">
              <p>Jane D.</p>
              <p>Age 24</p>
            </Link>
            <p>select one to verify more info</p>
          </section>
          <footer>
            <nav className="footer-nav">
              <Link to={`search_info3`} className="small-btn"> &lt;- back</Link>
              <Link to={`clarify`} className="small-btn">next -&gt;</Link>
            </nav>
          </footer>
        </div>
      </>
    )
  }
}

export default MatchedInfo
