import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class SearchInfo3 extends Component {

  _save = (event) => {
    event.preventDefault()

    const form=document.getElementById("searchInfo")

    const searchChanges = {
      mothers_first: form.mothers_first.value,
      mothers_last: form.mothers_last.value,
      fathers_first: form.fathers_first.value,
      fathers_last: form.fathers_last.value,
    }

    this.props.saveSearchChanges(searchChanges)

    // Go to the next page
    event.target.id === "forward" ? this.props.history.push('/matches') : this.props.history.push('/search_info2')
      
  }

  render() {
    return (
      <>
        <div className="container">
        <section className="enter-info">
          <img src={logo} className="main-logo" alt="logo" />
          <p>who you're looking for</p>
          <form id="searchInfo">
            <div>
              <label>your mothers first name: </label>
              <input type="text" name="mothers_first" size="15"  defaultValue={this.props.searchInfo.mothers_first}/>
            </div>
            <div>
              <label>your mothers last name: </label>
              <input type="text" name="mothers_last" size="15"  defaultValue={this.props.searchInfo.mothers_last}/>
            </div>
            <div>
              <label>your fathers first name: </label>
              <input type="text" name="fathers_first" size="15"  defaultValue={this.props.searchInfo.fathers_first}/>
            </div>
            <div>
              <label>your fathers last name: </label>
              <input type="text" name="fathers_last" size="15"  defaultValue={this.props.searchInfo.fathers_last}/>
            </div>
          </form>
        </section>
        <footer>
          <p>page 3 - search info</p>
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

export default SearchInfo3
