import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class Exit extends Component {
  render() {
    return (
      <>
        <div className="container">
          <section className="clarification">
            <img src={logo} className="main-logo" alt="logo" />
            <h1>no problem</h1>
            <p>
                It's a big step. Don't rush things. <br />Feel free to close the app and come back whenever you want to start searching again.
            </p>

            <p>Close the app or click back</p>
          </section>
          <footer>
            <nav className="footer-nav">
              <Link to={`enter_info_instruction`} className="small-btn"> &lt;- back</Link>
            </nav>
          </footer>
        </div>
      </>
    )
  }
}

export default Exit
