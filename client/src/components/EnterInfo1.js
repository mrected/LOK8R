import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class EnterInfo1 extends Component {

  _save = (event) => {
    event.preventDefault()

    const form=document.getElementById("user")

    const userChanges = {
      first_name: form.first_name.value,
      alias: form.alias.value,
      last_name: form.last_name.value,
      gender: form.gender.value,
      dob_month_year: form.dob_month_year.value,
      dob_day: form.dob_day,
    }

    this.props.saveUserChanges(userChanges)

    // Go to the next page
    event.target.id === "forward" ? this.props.history.push('/enter_info2') : this.props.history.push('/enter_info_instruction')
  }

  render() {

    return (
      <>
        <div className="container">
          <section className="enter-info">
            <img src={logo} className="main-logo" alt="logo" />
            <p>enter your information</p>
            <form id="user" name="userOne">
              <div>
                <label htmlFor="first_name">first name: </label>
                <input type="text" name="first_name" size="20" defaultValue={this.props.user.first_name} required />
              </div>
              <div>
                <label htmlFor="alias">nickname/alias: </label>
                <input type="text" name="alias" size="20" defaultValue={this.props.user.alias} required/>
              </div>
              <div>
                <label htmlFor="last_name">last name: </label>
                <input type="text" name="last_name" size="20" defaultValue={this.props.user.last_name} required />
              </div>
              <label htmlFor="gender">gender: </label>
              <select id="gender" defaultValue={this.props.user.gender}  >
                <option value="gender">- choose one -</option>
                <option value="m" selected={this.props.user.gender === "m"}>male</option>
                <option value="f" selected={this.props.user.gender === "f"}>female</option>
              </select>

              <div>
                <label htmlFor="dob_year_month_year">dob <br /> <span className="small-label">month/year: </span></label>
                <input id="dob_year_month_year" type="month" name="dob_month_year"  defaultValue={this.props.user.dob_year_month} />
                {/* <label htmlFor="dob_day"> <span className="small-label"><br />day: </span></label>
                <input id="dob_day" type="number" min="1" max="31"  defaultValue={this.props.user.dob_day.value} /> */}
              </div>
            </form>
          </section>
          <footer>
            <p>page 1 - your info</p>
            <nav className="footer-nav">
              <a href="#" className="small-btn" onClick={this._save}> &lt;- back</a>
              <a href="#" id="forward" className="small-btn" onClick={this._save}>next -&gt;</a>
            </nav>
          </footer>
        </div>
      </>
    )
  }
}

export default EnterInfo1
