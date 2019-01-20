import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class EnterInfo2 extends Component {

  componentWillMount() {
    if(!auth.isAuthenticated()){
      history.replace('./Splash')
    }
  }

  _save = (event) => {
    event.preventDefault()

    const form=document.getElementById("user")

    const userChanges = {
      mothers_first: form.mothers_first.value,
      mothers_last: form.mothers_last.value,
      fathers_first: form.fathers_first.value,
      fathers_last: form.fathers_last.value,
    }

    this.props.saveUserChanges(userChanges)

    // Go to the next page
    event.target.id === "forward" ? this.props.history.push('/search_info_instruction') : this.props.history.push('/enter_info1')
  }

  render() {
    return (
      <>
        <div className="container">
          <section className="enter-info">
            <img src={logo} className="main-logo" alt="logo" />
            <p>enter your information</p>
            <form id="user">
              
              <div><label>your mothers first name: </label><input type="text" name="mothers_first" size="15"  defaultValue={this.props.user.mothers_first}/></div>
              <div><label>your mothers last name: </label><input type="text" name="mothers_last" size="15"  defaultValue={this.props.user.mothers_last}/></div>
              <div><label>your fathers first name: </label><input type="text" name="fathers_first" size="15"  defaultValue={this.props.user.fathers_first}/></div>
              <div><label>your fathers last name: </label><input type="text" name="fathers_last" size="15"  defaultValue={this.props.user.fathers_last}/></div>
            </form>
            </section>
            <footer>
              <p className="page">page 2 - your info</p>
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

export default EnterInfo2
