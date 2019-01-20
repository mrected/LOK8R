import React, { Component } from 'react'

import auth from '../auth'
import history from '../history'

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
      state: form.state.value,

    }

    this.props.saveUserChanges(userChanges)


    // Go to the next page
    event.target.id === "forward" ? this.props.history.push('/search_info_instruction') : this.props.history.push('/enter_info_instruction')
  }

  componentWillMount() {
    if(!auth.isAuthenticated()){
      history.replace('./Splash')
    }
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
                <option value="m" defaultValue={this.props.user.gender === "m"}>male</option>
                <option value="f" selected={this.props.user.gender === "f"}>female</option>
              </select>

              <div>
                <label htmlFor="dob_month_year">dob <br /> <span className="small-label">month/year: </span></label>
                {/* <input id="dob_month_year" type="month" name="search-dob"  defaultValue={this.props.searchInfo.dob_month_year} /> */}
                <input id="dob_month_year" type="month" name="user-dob"  defaultValue={this.props.user.dob_month_year} />
              </div>
              <div>
              <label htmlFor="state">state you were born in: </label>
                <select id="state" selected={this.props.user.state}  >
                  <option>- choose one -</option>
                  <option value="Alabama" selected={this.props.user.state === "Alabama"}>Alabama</option>
                  <option value="Alaska" selected={this.props.user.state === "Alaska"}>Alaska</option>
                  <option value="Arizona" selected={this.props.user.state === "Arizona"}>Arizona</option>
                  <option value="Arkansas" selected={this.props.user.state === "Arkansas"}>Arkansas</option>
                  <option value="California" selected={this.props.user.state === "California"}>California</option>
                  <option value="Colorado" selected={this.props.user.state === "Colorado"}>Colorado</option>
                  <option value="Connecticut" selected={this.props.user.state === "Connecticut"}>Connecticut</option>
                  <option value="Delaware" selected={this.props.user.state === "Delaware"}>Delaware</option>
                  <option value="Florida" selected={this.props.user.state === "Florida"}>Florida</option>
                  <option value="Georgia" selected={this.props.user.state === "Georgia"}>Georgia</option>
                  <option value="Hawaii" selected={this.props.user.state === "Hawaii"}>Hawaii</option>
                  <option value="Idaho" selected={this.props.user.state === "Idaho"}>Idaho</option>
                  <option value="Illinois" selected={this.props.user.state === "Illinois"}>Illinois</option>
                  <option value="Indiana" selected={this.props.user.state === "Indiana"}>Ind</option>
                  <option value="Iowa" selected={this.props.user.state === "Iowa"}>Iowa</option>
                  <option value="Kansas" selected={this.props.user.state === "Kansas"}>Kansas</option>
                  <option value="Kentucky" selected={this.props.user.state === "Kentucky"}>Kentucky</option>
                  <option value="Louisiana" selected={this.props.user.state === "Louisiana"}>Louisiana</option>
                  <option value="Maine" selected={this.props.user.state === "Maine"}>Maine</option>
                  <option value="Maryland" selected={this.props.user.state === "Maryland"}>Maryland</option>
                  <option value="Massachusetts" selected={this.props.user.state === "Massachusetts"}>Massachusetts</option>
                  <option value="Michigan" selected={this.props.user.state === "Michigan"}>Michigan</option>
                  <option value="Minnesota" selected={this.props.user.state === "Minnesota"}>Minnesota</option>
                  <option value="Mississippi" selected={this.props.user.state === "Mississippi"}>Mississippi</option>
                  <option value="Missouri" selected={this.props.user.state === "Missouri"}>Missouri</option>
                  <option value="Montana" selected={this.props.user.state === "Montana"}>Montana</option>
                  <option value="Nebraska" selected={this.props.user.state === "Nebraska"}>Nebraska</option>
                  <option value="Nevada" selected={this.props.user.state === "Nevada"}>Nevada</option>
                  <option value="New Hampshire" selected={this.props.user.state === "New Hampshire"}>New Hampshire</option>
                  <option value="New Jersey" selected={this.props.user.state === "New Jersey"}>New Jersey</option>
                  <option value="New Mexico" selected={this.props.user.state === "New Mexico"}>New Mexico</option>
                  <option value="New York" selected={this.props.user.state === "New York"}>New York</option>
                  <option value="North Carolina" selected={this.props.user.state === "North Carolina"}>North Carolina</option>
                  <option value="North Dakota" selected={this.props.user.state === "North Dakota"}>North Dakota</option>
                  <option value="Ohio" selected={this.props.user.state === "Ohio"}>Ohio</option>
                  <option value="Oklahoma" selected={this.props.user.state === "Oklahoma"}>Oklahoma</option>
                  <option value="Oregon" selected={this.props.user.state === "Oregon"}>Oregon</option>
                  <option value="Pennsylvania" selected={this.props.user.state === "Pennsylvania"}>Pennsylvania</option>
                  <option value="Rhode Island" selected={this.props.user.state === "Rhode Island"}>Rhode Island</option>
                  <option value="South Carolina" selected={this.props.user.state === "South Carolina"}>South Carolina</option>
                  <option value="South Dakota" selected={this.props.user.state === "South Dakota"}>South Dakota</option>
                  <option value="Tennessee" selected={this.props.user.state === "Tennessee"}>Tennessee</option>
                  <option value="Texas" selected={this.props.user.state === "Texas"}>Texas</option>
                  <option value="Utah" selected={this.props.user.state === "Utah"}>Utah</option>
                  <option value="Vermont" selected={this.props.user.state === "Vermont"}>Vermont</option>
                  <option value="Virginia" selected={this.props.user.state === "Virginia"}>Virginia</option>
                  <option value="Washington" selected={this.props.user.state === "Washington"}>Washington</option>
                  <option value="West Virginia" selected={this.props.user.state === "West Virginia"}>West Virginia</option>
                  <option value="Wisconsin" selected={this.props.user.state === "Wisconsin"}>Wisconsin</option>
                  <option value="Wyoming" selected={this.props.user.state === "Wyoming"}>Wyoming</option>
                </select>
              </div>
            </form>
          </section>
          <footer>
            {/* <p>page 1 - your info</p> */}
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
