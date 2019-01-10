import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class SearchInfo1 extends Component {
  render() {
    return (
      <>
        <div className="container">
          <section className="enter-info">
            <img src={logo} className="main-logo" alt="logo" />
            <p>who you're looking for</p>
            <form>
              <div><label>their first name: </label><input type="text" name="search-first-name" size="20"  /></div>
              <div><label>nickname/alias: </label><input type="text" name="search-nickname" size="20"  /></div>
              <div><label>their last name: </label><input type="text" name="search-last-name" size="20"  /></div>
              <div className="gender-radio">
                <label>their gender: </label>
                <label className="small-label" for="m">male</label>
                <input type="radio" name="search-gender" value="m" id="m"></input>
                <label className="small-label" for="f">female</label>
                <input type="radio" name="search-gender" value="f" id="f"></input>
              </div>
              <div>
                <label for="search-dob-year-month">dob <br /> month/year: </label><input id="search-dob" type="month" name="search-dob" />
                <label for="search-dob-day"> day: </label><input id="search-dob-day" type="number" min="1" max="31" />
              </div>
            </form>
          </section>
          <footer>
          <p className="page">page 1 - search info</p>
            <nav className="footer-nav">
              <Link to={`search_info_instruction`} className="small-btn"> &lt;- back</Link>
              <Link to={`search_info2`} className="small-btn">next -&gt;</Link>
            </nav>
          </footer>
        </div>
      </>
    )
  }
}

export default SearchInfo1
