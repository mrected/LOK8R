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
      ast_name: form.last_name.value,
      gender: form.gender.value,
      dob_month_year: form.dob_month.value,
      dob_day: form.dob_day,
    }

    this.props.saveSearchChanges(searchChanges)

    // Go to the next page
    this.props.history.push('/search_info2')
  }

  render() {
    return (
      <>
        <div className="container">
          <section className="enter-info">
            <img src={logo} className="main-logo" alt="logo" />
            <p>who you're looking for</p>
            <form id="searchInfo">
              <div><label>their first name: </label><input type="text" name="search-first-name" size="20" defaultValue={this.props.searchInfo.first_name}  /></div>
              <div><label>nickname/alias: </label><input type="text" name="search-nickname" size="20" defaultValue={this.props.searchInfo.nickname}  /></div>
              <div><label>their last name: </label><input type="text" name="search-last-name" size="20" defaultValue={this.props.searchInfo.last_name}  /></div>
              <div className="gender-radio">
                <label>their gender: </label>
                <label className="small-label" for="m">male</label>
                <input type="radio" name="search-gender" value="m" id="m" defaultValue={this.props.searchInfo.gender}></input>
                <label className="small-label" for="f">female</label>
                <input type="radio" name="search-gender" value="f" id="f" defaultValue={this.props.searchInfo.gender}></input>
              </div>
              <div>
                <label for="search-dob-year-month">dob <br /> month/year: </label><input id="search-dob" type="month" name="search-dob"  defaultValue={this.props.searchInfo.dob_month_year}/>
                <label for="search-dob-day"> day: </label><input id="search-dob-day" type="number" min="1" max="31" defaultValue={this.props.searchInfo.dob_day} />
              </div>
            </form>
          </section>
          <footer>
          <p className="page">page 1 - search info</p>
            <nav className="footer-nav">
              <Link to={`search_info_instruction`} className="small-btn"> &lt;- back</Link>
              <a href="#" className="small-btn" onClick={this._save}>next -&gt;</a>
            </nav>
          </footer>
        </div>
      </>
    )
  }
}

export default SearchInfo1
