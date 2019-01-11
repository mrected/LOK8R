import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class DisplayData extends Component {
  render() {
      console.log(this.props.userData.email)
    return (
      <>
        <div className="container">
        <section className="clarification">
        <img src={logo} className="main-logo" alt="logo" />
        <p>display data</p>
        <ul>
            {this.props.userData.map(data => {
                return `<li>${data[Object.keys]}</li>`
                }
            )}
        <li>{this.props.userData.email}</li>
        <li>{this.props.userData.first_name}</li>
        <li>{this.props.userData.alias}</li>
        <li>{this.props.userData.last_name}</li>
        <li>{this.props.userData.gender}</li>
        <li>{this.props.userData.birth_year}</li>
        <li>{this.props.userData.birth_month}</li>
        <li>{this.props.userData.birth_day}</li>
        <li>{this.props.userData.birth_state}</li>
        <li>{this.props.userData.mothers_first}</li>
        <li>{this.props.userData.mothers_last}</li>
        <li>{this.props.userData.fathers_first}</li>
        <li>{this.props.userData.fathers_last}</li>
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
