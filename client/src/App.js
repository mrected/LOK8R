import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'

import './Reset.css'
import './App.css'


import Splash from './components/Splash'
import Login from './components/LogIn'
import EnterInfoInstruction from './components/EnterInfoInstruction'
import EnterInfo1 from './components/EnterInfo1'
import EnterInfo2 from './components/EnterInfo2'
import SearchInfoInstruction from './components/SearchInfoInstruction'
import SearchInfo1 from './components/SearchInfo1'
import SearchInfo2 from './components/SearchInfo2'
import SearchInfo3 from './components/SearchInfo3'
import MatchedInfo from './components/MatchedInfo'
import Clarification from './components/Clarification'
import Closing from './components/Closing'
import Exit from './components/Exit'
import DisplayData from './components/DisplayData'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: "it works",
      user: [
        {email:"jimmy@mail.com"},
        {first_name:"james"},
        {alias:"jimmy"},
        {last_name:"hoffa"},
        {gender:"m"},
        {birth_year:"1985"},
        {birth_month:"2"},
        {birth_day:"2"},
        {birth_state:"guam"},
        {mothers_first:"mom"},
        {mothers_last:"parent"},
        {fathers_first:"dad"},
        {fathers_last:"parent"},
      ],
      searchInfo : {
        first_name:"amelia",
        alias:"plane lady",
        last_name:"earhart",
        gender:"f",
        birth_year:"1912",
        birth_month:"3",
        birth_day:"3",
        birth_state:"micronesia",
        mothers_first:"mom",
        mothers_last:"parent",
        fathers_first:"dad",
        fathers_last:"parent",
        last_year_seen:"1945",
        they_are_to_you:"sister",
        you_are_to_them:"brother",
        reason_for_separation:"unknown",
      }
    }
  }

   getData = () => {
    axios.get("/api").then(response => {
      console.log(response)
      // this.setState({
      //   locations: response.data.locations
      // })
    })
    
  }

  


  render() {

    // {(props) => <Splash {...props} test={this.state.test}/>}
    // console.log(getData)
    this.getData()
    return (
      <>
        <Router>
          <>
          {/*https://xd.adobe.com/view/c029d25b-319f-4b3a-63b9-19ad7296cdf7-b618/*/}
          <Route path="/" exact component={Splash} />
          <Route path="/login" component={Login} />
          <Route path="/enter_info_instruction" component={EnterInfoInstruction} />
          <Route path="/enter_info1" component={EnterInfo1} />
          <Route path="/enter_info2" component={EnterInfo2} />
          <Route path="/search_info_instruction" component={SearchInfoInstruction} />
          <Route path="/search_info1" component={SearchInfo1} />
          <Route path="/search_info2" component={SearchInfo2} />
          <Route path="/search_info3" component={SearchInfo3} />
          <Route path="/matches" exact component={MatchedInfo} />
          <Route path="/clarify" exact component={Clarification} />
          <Route path="/closing" component={Closing} />
          <Route path="/exit" component={Exit} />
          <Route path="/display" component={(props) => <DisplayData {...props} userData={this.state.user} />} />
          </>
        </Router>
      </>
    )
  }
}

export default App
