import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class Closing extends Component {
  render() {
    return (
      <>
        <div className="container">
          <section className="closing">
            <img src={logo} className="main-logo" alt="logo" />
            <p>Michaela has been sent a message with your information.</p>
            <p>If she thinks you're the person she's looking for, she will have the option to send a message to the email associated with this account, we will notify you that your search has ended and your information will be removed from our database.</p>
            <p>If she doesn't recognize you, we'll let you know and save your search criteria to use in the event the right person does a search for you.</p>
            <p>Thank you for using lok8r and good luck!</p>
          </section>
          <footer>
            <nav className="footer-nav">
              <Link to={`/`} className="small-btn"> close </Link>
            </nav>
          </footer>
        </div>
      </>
    )
  }
}

export default Closing
