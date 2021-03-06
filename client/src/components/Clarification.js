import React, { Component } from 'react'
import { Link} from 'react-router-dom'

import auth from '../auth'
import history from '../history'
import axios from 'axios'
import logo from '../images/main-logo.svg'

class Clarification extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      results: [],
      loading: false
    }
  }

  componentWillMount() {
    if(!auth.isAuthenticated()){
      history.replace('./Splash')
    } else {
      axios.get('/results').then(response => {
        this.setState({ results: response.data.results })
      })
    }
  }


  showResults = () => {
    if (this.state.results.length === 0) {
      return (
        <>
            <p>
                Unfortunately, there's no matches at this time.
                Either the person you're looking for hasn't entered their info yet or
                you may have entered something incorrectly.
            </p>
            <p>
              You can either go back or check your information or logout and try your search later
            </p>
        </>
            )
    } else {
      return (
       <>
        <p>This is probably the person you're looking for</p>

          <ul>
            <li>first name: <span className="data">{this.state.results[0].user_first}</span></li>
            <li>nickname: <span className="data">{this.state.results[0].user_alias}</span></li>
            <li>last name: <span className="data">{this.state.results[0].user_last}</span></li>
            <li>gender: <span className="data">{this.state.results[0].user_gender}</span></li>
            <li>born: <span className="data">{this.state.results[0].user_dob_month_year}</span></li>
            <li>birth state: <span className="data">{this.state.results[0].user_birth_state}</span></li>
          </ul>

          <p>
            You can contact {this.state.results[0].user_gender === "f" ? "her" : "him"} at this email address: <br />
            <a class="email-link" href={`mailto:${this.state.results[0].email}`}>{this.state.results[0].email}</a>
          </p>
          <p>You can either logout or go back and change something if you think this isn't the right person</p>
        </>
         )
        
      
    }
  }
  
  render() {

    return (
      <>
        <div className="container">
        <section className="clarification">
        <img src={logo} className="main-logo" alt="logo" />
        {this.showResults()}
        
        </section>
        <footer>
          <nav className="footer-nav">
            <Link to={`start_search`} className="small-btn"> &lt;- back</Link>
            <Link to={`logout`} className="small-btn">logout</Link>
          </nav>
          </footer>
        </div>
      </>
    )
  }
}

export default Clarification

