import React, { Component } from 'react'
import { Link} from 'react-router-dom'

import auth from '../auth'
import history from '../history'
import axios from 'axios'

import logo from '../images/main-logo.svg'

class MatchedInfo extends Component {

  componentWillMount() {
    if(!auth.isAuthenticated()){
      history.replace('./Splash')
    }
  }

  _sendData = (event) => {
    event.preventDefault()
    // let allUserData = {
    //   email:"test_acct",
    //   first_name:this.props.userInfo.first_name,
    //   alias:this.props.userInfo.alias,
    //   last_name:this.props.userInfo.last_name,
    //   gender:this.props.userInfo.gender,
    //   dob_month_year:this.props.userInfo.dob_month_year,
    //   state:this.props.userInfo.state,
    // }
    // let allSearchData = {
    //   first_name:this.props.searchInfo.first_name,
    //   alias:this.props.searchInfo.alias,
    //   last_name:this.props.searchInfo.last_name,
    //   gender:this.props.searchInfo.gender,
    //   dob_month_year:this.props.searchInfo.dob_month_year,
    //   state:this.props.searchInfo.state,
    // }
    // console.log(this.props.userInfo)
    axios.post('/account', { userInfo: this.props.userInfo, searchInfo: this.props.searchInfo }).then(response => {
      history.replace('/clarify')
      
    })
  }
  
  render() {

    return (
      <>
        <div className="container ">
          <section className="matches">
            <img src={logo} className="main-logo" alt="logo" />
            <p>All of your info is entered 
                <br /> click the button below to start searching</p>

            <a href="#" className="big-btn" onClick={this._sendData}>
              start searching
            </a>

            
            <p>or go back to change something</p>
          </section>
          <footer>
            <nav className="footer-nav">
              <Link to={`search_info1`} className="small-btn"> &lt;- back</Link>
              
            </nav>
          </footer>
        </div>
      </>
    )
  }
}

export default MatchedInfo
