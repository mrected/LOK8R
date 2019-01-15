import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class EnterInfo2 extends Component {

  _save = (event) => {
    event.preventDefault()

    const form=document.getElementById("user")

    const userChanges = {
      state: form.state.value,
      mothers_first: form.mothers_first.value,
      mothers_last: form.mothers_last.value,
      fathers_first: form.fathers_first.value,
      fathers_last: form.fathers_last.value,
    }

    this.props.saveUserChanges(userChanges)

    // Go to the next page
    this.props.history.push('/search_info_instruction')
  }

  render() {
    return (
      <>
        <div className="container">
          <section className="enter-info">
            <img src={logo} className="main-logo" alt="logo" />
            <p>enter your information</p>
            <form id="user">
              <div>
                <label htmlFor="state">state you were born in: </label>
                <select id="state" defaultValue={this.props.user.state} >
                  <option value="Birth State">- choose one -</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Ind</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
              </div>
              <div><label>your mothers first name: </label><input type="text" name="mothers_first" size="15"  defaultValue={this.props.user.mothers_first}/></div>
              <div><label>your mothers last name: </label><input type="text" name="mothers_last" size="15"  defaultValue={this.props.user.mothers_last}/></div>
              <div><label>your fathers first name: </label><input type="text" name="fathers_first" size="15"  defaultValue={this.props.user.fathers_first}/></div>
              <div><label>your fathers last name: </label><input type="text" name="fathers_last" size="15"  defaultValue={this.props.user.fathers_last}/></div>
            </form>
            </section>
            <footer>
              <p className="page">page 2 - your info</p>
              <nav className="footer-nav">
                <Link to={`enter_info1`} className="small-btn"> &lt;- back</Link>
                <a href="#" className="small-btn" onClick={this._save}>next -&gt;</a>
              </nav>
            </footer>
        </div>
      </>
    )
  }
}

export default EnterInfo2
