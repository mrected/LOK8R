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
            <p>All of your info is entered 
                <br /> click the button below to start searching</p>

            <Link to={`clarify`} className="big-btn">
              start searching
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
