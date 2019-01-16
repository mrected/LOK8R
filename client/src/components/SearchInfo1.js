import React, { Component } from 'react'
import { Link} from 'react-router-dom'
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
      dob_day: form.dob_day,
    }

    this.props.saveSearchChanges(searchChanges)

    // Go to the next page
    event.target.id === "forward" ? this.props.history.push('/search_info2') : this.props.history.push('/search_info_instruction')
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
              <div className="gender-radio">
                <label>their gender: </label>
                <label className="small-label" for="m">male</label>
                <input type="radio" name="gender" value="m" id="m" defaultValue={this.props.searchInfo.gender} checked={this.props.searchInfo.gender === "m"} ></input>
                <label className="small-label" for="f">female</label>
                <input type="radio" name="gender" value="f" id="f" defaultValue={this.props.searchInfo.gender} checked={this.props.searchInfo.gender === "f"} ></input>
              </div>
              <div>
                <label htmlFor="dob_month_year">dob <br /> month/year: </label><input id="dob_month_year" type="month" name="search-dob"  defaultValue={this.props.searchInfo.dob_month_year}/>
                <label htmlFor="dob_day"> day: </label><input id="dob_day" type="number" min="1" max="31" defaultValue={this.props.searchInfo.dob_day.value} />
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
