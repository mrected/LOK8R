import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class EnterInfo1 extends Component {

  _save = (event) => {
    event.preventDefault()

    const form=document.getElementById("user")

    const userChanges = {
      first_name: form.first_name.value,
      nickname: form.nickname.value,
      ast_name: form.last_name.value,
      gender: form.gender.value,
      dob_month_year: form.dob_month.value,
      dob_day: form.dob_day,
    }

    this.props.saveUserChanges(userChanges)

    // Go to the next page
    this.props.history.push('/enter_info2')
  }

  render() {

    return (
      <>
        <div className="container">
          <section className="enter-info">
            <img src={logo} className="main-logo" alt="logo" />
            <p>enter your information</p>
            <form id="user" name="userOne">
            <div><label>first name: </label><input type="text" name="first_name" size="20" defaultValue={this.props.user.first_name} required /></div>
            <div><label>nickname/alias: </label><input type="text" name="nickname" size="20" defaultValue={this.props.user.nickname} required/></div>
            <div><label>last name: </label><input type="text" name="last_name" size="20" defaultValue={this.props.user.last_name} required /></div>
            <div className="gender-radio">
              <label>gender: </label>
              <label className="small-label" htmlFor="m">male</label>
              <input type="radio" name="gender" value="m" id="m" defaultValue={this.props.user.gender} ></input>
              <label className="small-label" htmlFor="f">female</label>
              <input type="radio" name="gender" value="f" id="f" defaultValue={this.props.user.gender} ></input><br />
            </div>
            <div>
              <label htmlFor="dob_year_month">dob <br /> <span className="small-label">month/year: </span></label><input id="dob_year_month" type="month" name="dob_month"  defaultValue={this.props.user.dob_year_month} />
              <label htmlFor="dob_day"> <span className="small-label"><br />day: </span></label><input id="dob_day" type="number" min="1" max="31"  defaultValue={this.props.user.dob_day} />
            </div>
            </form>
          </section>
          <footer>
            <p>page 1 - your info</p>
            <nav className="footer-nav">
              <Link to={`enter_info_instruction`} className="small-btn"> &lt;- back</Link>
              <a href="#" className="small-btn" onClick={this._save}>next -&gt;</a>
            </nav>
          </footer>
        </div>
      </>
    )
  }
}

export default EnterInfo1
