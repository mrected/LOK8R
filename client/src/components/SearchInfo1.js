import React, { Component } from 'react'
import logo from '../images/main-logo.svg'

class SearchInfo1 extends Component {

  _save = (event) => {
    event.preventDefault()

    const form=document.getElementById("searchInfo")

    const searchChanges = {
      first_name: form.first_name.value,
      nickname: form.nickname.value,
      last_name: form.last_name.value,
      gender: form.gender.value,
      dob_month_year: form.dob_month_year.value,
      state: form.state.value,
    }

    this.props.saveSearchChanges(searchChanges)

    // Go to the next page
    event.target.id === "forward" ? this.props.history.push('/matches') : this.props.history.push('/search_info_instruction')
  }

  render() {
    return (
      <>
        <div className="container">
          <section className="enter-info">
            <img src={logo} className="main-logo" alt="logo" />
            <p>who you're looking for</p>
            <form id="searchInfo">
              <div><label>their first name: </label><input type="text" name="first_name" size="20" defaultValue={this.props.searchInfo.first_name}  /></div>
              <div><label>nickname/alias: </label><input type="text" name="nickname" size="20" defaultValue={this.props.searchInfo.nickname}  /></div>
              <div><label>their last name: </label><input type="text" name="last_name" size="20" defaultValue={this.props.searchInfo.last_name}  /></div>
              <select id="gender" selected={this.props.searchInfo.gender}  >
                <option value="gender">- choose one -</option>
                <option value="m" selected={this.props.searchInfo.gender === "m"}>male</option>
                <option value="f" selected={this.props.searchInfo.gender === "f"}>female</option>
              </select>
              <div>
                <label htmlFor="dob_month_year">dob <br /> month/year: </label>
                <input id="dob_month_year" type="month" name="search-dob"  defaultValue={this.props.searchInfo.dob_month_year}/>
              </div>
              <div>
                <label htmlFor="state">state they were born in: </label>
                <select id="state" selected={this.props.searchInfo.state}  >
                  <option>- choose one -</option>
                  <option value="Alabama" selected={this.props.searchInfo.state === "Alabama"}>Alabama</option>
                  <option value="Alaska" selected={this.props.searchInfo.state === "Alaska"}>Alaska</option>
                  <option value="Arizona" selected={this.props.searchInfo.state === "Arizona"}>Arizona</option>
                  <option value="Arkansas" selected={this.props.searchInfo.state === "Arkansas"}>Arkansas</option>
                  <option value="California" selected={this.props.searchInfo.state === "California"}>California</option>
                  <option value="Colorado" selected={this.props.searchInfo.state === "Colorado"}>Colorado</option>
                  <option value="Connecticut" selected={this.props.searchInfo.state === "Connecticut"}>Connecticut</option>
                  <option value="Delaware" selected={this.props.searchInfo.state === "Delaware"}>Delaware</option>
                  <option value="Florida" selected={this.props.searchInfo.state === "Florida"}>Florida</option>
                  <option value="Georgia" selected={this.props.searchInfo.state === "Georgia"}>Georgia</option>
                  <option value="Hawaii" selected={this.props.searchInfo.state === "Hawaii"}>Hawaii</option>
                  <option value="Idaho" selected={this.props.searchInfo.state === "Idaho"}>Idaho</option>
                  <option value="Illinois" selected={this.props.searchInfo.state === "Illinois"}>Illinois</option>
                  <option value="Indiana" selected={this.props.searchInfo.state === "Indiana"}>Ind</option>
                  <option value="Iowa" selected={this.props.searchInfo.state === "Iowa"}>Iowa</option>
                  <option value="Kansas" selected={this.props.searchInfo.state === "Kansas"}>Kansas</option>
                  <option value="Kentucky" selected={this.props.searchInfo.state === "Kentucky"}>Kentucky</option>
                  <option value="Louisiana" selected={this.props.searchInfo.state === "Louisiana"}>Louisiana</option>
                  <option value="Maine" selected={this.props.searchInfo.state === "Maine"}>Maine</option>
                  <option value="Maryland" selected={this.props.searchInfo.state === "Maryland"}>Maryland</option>
                  <option value="Massachusetts" selected={this.props.searchInfo.state === "Massachusetts"}>Massachusetts</option>
                  <option value="Michigan" selected={this.props.searchInfo.state === "Michigan"}>Michigan</option>
                  <option value="Minnesota" selected={this.props.searchInfo.state === "Minnesota"}>Minnesota</option>
                  <option value="Mississippi" selected={this.props.searchInfo.state === "Mississippi"}>Mississippi</option>
                  <option value="Missouri" selected={this.props.searchInfo.state === "Missouri"}>Missouri</option>
                  <option value="Montana" selected={this.props.searchInfo.state === "Montana"}>Montana</option>
                  <option value="Nebraska" selected={this.props.searchInfo.state === "Nebraska"}>Nebraska</option>
                  <option value="Nevada" selected={this.props.searchInfo.state === "Nevada"}>Nevada</option>
                  <option value="New Hampshire" selected={this.props.searchInfo.state === "New Hampshire"}>New Hampshire</option>
                  <option value="New Jersey" selected={this.props.searchInfo.state === "New Jersey"}>New Jersey</option>
                  <option value="New Mexico" selected={this.props.searchInfo.state === "New Mexico"}>New Mexico</option>
                  <option value="New York" selected={this.props.searchInfo.state === "New York"}>New York</option>
                  <option value="North Carolina" selected={this.props.searchInfo.state === "North Carolina"}>North Carolina</option>
                  <option value="North Dakota" selected={this.props.searchInfo.state === "North Dakota"}>North Dakota</option>
                  <option value="Ohio" selected={this.props.searchInfo.state === "Ohio"}>Ohio</option>
                  <option value="Oklahoma" selected={this.props.searchInfo.state === "Oklahoma"}>Oklahoma</option>
                  <option value="Oregon" selected={this.props.searchInfo.state === "Oregon"}>Oregon</option>
                  <option value="Pennsylvania" selected={this.props.searchInfo.state === "Pennsylvania"}>Pennsylvania</option>
                  <option value="Rhode Island" selected={this.props.searchInfo.state === "Rhode Island"}>Rhode Island</option>
                  <option value="South Carolina" selected={this.props.searchInfo.state === "South Carolina"}>South Carolina</option>
                  <option value="South Dakota" selected={this.props.searchInfo.state === "South Dakota"}>South Dakota</option>
                  <option value="Tennessee" selected={this.props.searchInfo.state === "Tennessee"}>Tennessee</option>
                  <option value="Texas" selected={this.props.searchInfo.state === "Texas"}>Texas</option>
                  <option value="Utah" selected={this.props.searchInfo.state === "Utah"}>Utah</option>
                  <option value="Vermont" selected={this.props.searchInfo.state === "Vermont"}>Vermont</option>
                  <option value="Virginia" selected={this.props.searchInfo.state === "Virginia"}>Virginia</option>
                  <option value="Washington" selected={this.props.searchInfo.state === "Washington"}>Washington</option>
                  <option value="West Virginia" selected={this.props.searchInfo.state === "West Virginia"}>West Virginia</option>
                  <option value="Wisconsin" selected={this.props.searchInfo.state === "Wisconsin"}>Wisconsin</option>
                  <option value="Wyoming" selected={this.props.searchInfo.state === "Wyoming"}>Wyoming</option>
                </select>
              </div>
            </form>
          </section>
          <footer>
          <p className="page">page 1 - search info</p>
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

export default SearchInfo1
