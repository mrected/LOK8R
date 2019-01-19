import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class DisplayData extends Component {
  render() {
      
    return (
      <>
        <div className="container">
        <section className="clarification">
        <img src={logo} className="main-logo" alt="logo" />
        <p>display data</p>
        <ul>
            {/* {this.props.searchInfo.map(data => {
                return `<li>${data[Object.keys]}</li>`
                }
            )} */}



        <li>{this.props.search.first_name}</li>
        <li>{this.props.search.alias}</li>
        <li>{this.props.search.last_name}</li>
        <li>{this.props.search.gender}</li>
        <li>{this.props.search.birth_year}</li>
        <li>{this.props.search.birth_month}</li>
        <li>{this.props.search.birth_day}</li>
        <li>{this.props.search.birth_state}</li>
        <li>{this.props.search.mothers_first}</li>
        <li>{this.props.search.mothers_last}</li>
        <li>{this.props.search.fathers_first}</li>
        <li>{this.props.search.fathers_last}</li>
        </ul>
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

export default DisplayData
