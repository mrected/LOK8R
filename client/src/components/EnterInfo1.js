import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class EnterInfo1 extends Component {

  getInfo = event => {
    event.preventDefault()
    console.log(event)
  }

  render() {

    return (
      <>
        <div className="container">
          <section className="enter-info">
            <img src={logo} className="main-logo" alt="logo" />
            <p>enter your information</p>
            <form name="userOne">
            <div><label>first name: </label><input type="text" name="user-first-name" size="20" required /></div>
            <div><label>nickname/alias: </label><input type="text" name="user-nickname" size="20" /></div>
            <div><label>last name: </label><input type="text" name="user-last-name" size="20" required /></div>
            <div className="gender-radio">
              <label>gender: </label>
              <label className="small-label" for="m">male</label>
              <input type="radio" name="user-gender" value="m" id="m"></input>
              <label className="small-label" for="f">female</label>
              <input type="radio" name="user-gender" value="f" id="f"></input><br />
            </div>
            <div>
              <label for="user-dob-year-month">dob <br /> <span className="small-label">month/year: </span></label><input id="user-dob" type="month" name="user-dob" />
              <label for="user-dob-day"> <span className="small-label"><br />day: </span></label><input id="user-dob-day" type="number" min="1" max="31" />
            </div>
            </form>
          </section>
          <footer>
            <p>page 1 - your info</p>
            <nav className="footer-nav">
              <Link to={`enter_info_instruction`} className="small-btn" onClick={this.linkTest}> &lt;- back</Link>
              <Link to={`enter_info2`} className="small-btn">next -&gt;</Link>
            </nav>
          </footer>
        </div>
      </>
    )
  }
}

export default EnterInfo1
