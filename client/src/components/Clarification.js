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
      results: []
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
      return <p>NO MATCHES</p>
    } else {
      return (
        this.state.results.map(result => (
          <ul>
            <li>first name: <span className="data">{result.user_first}</span></li>
            <li>nickname: <span className="data">{result.user_alias}</span></li>
            <li>last name: <span className="data">{result.user_last}</span></li>
            <li>gender: <span className="data">{result.user_gender}</span></li>
            <li>born: <span className="data">{result.user_birth_year}</span></li>
            <li>birth state: <span className="data">{result.user_birth_state}</span></li>
          </ul>
         )
        )
      )
    }
  }
  
  render() {

    return (
      <>
        <div className="container">
        <section className="clarification">
        <img src={logo} className="main-logo" alt="logo" />
        <p>this is probably the person you're looking for</p>
        <p>these areas matched your search criteria:</p>
        {this.showResults()}
        
        <p>do you think this is a match?</p>
        </section>
        <footer>
          <nav className="footer-nav">
            <Link to={`matches`} className="small-btn"> &lt;- back</Link>
            <Link to={`closing`} className="small-btn">yes -&gt;</Link>
          </nav>
          </footer>
        </div>
      </>
    )
  }
}

export default Clarification

