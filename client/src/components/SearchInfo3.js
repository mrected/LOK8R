import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class SearchInfo3 extends Component {
  render() {
    return (
      <>
        <div className="container">
        <section className="enter-info">
          <img src={logo} className="main-logo" alt="logo" />
          <p>who you're looking for</p>
          <form>
            <div><label>their mothers first name: </label><input type="text" name="search-mothers-first" size="15" /></div>
            <div><label>their mothers last name: </label><input type="text" name="search-mothers-last" size="15" /></div>
            <div><label>their fathers first name: </label><input type="text" name="search-fathers-first" size="15" /></div>
            <div><label>their fathers last name: </label><input type="text" name="search-fathers-last" size="15" /></div>
          </form>
        </section>
        <footer>
          <p>page 3 - search info</p>
          <nav className="footer-nav">
            <Link to={`search_info2`} className="small-btn"> &lt;- back</Link>
            <Link to={`matches`} className="small-btn">next -&gt;</Link>
          </nav>
        </footer>
        </div>
      </>
    )
  }
}

export default SearchInfo3
