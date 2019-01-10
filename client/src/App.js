import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

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




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        first_name:"",
        alias:"",
        last_name:"",
        gender:"",
        dob_month_year:"",
        dob_day:"",
        state:"",
        mothers_first:"",
        mothers_last:"",
        fathers_first:"",
        fathers_last:"",
      },
      searchInfo : {
        first_name:"",
        alias:"",
        last_name:"",
        gender:"",
        dob_month_year:"",
        dob_day:"",
        state:"",
        mothers_first:"",
        mothers_last:"",
        fathers_first:"",
        fathers_last:"",
        last_year_seen:"",
        last_place_seen:"",
        user_is_to_search:"",
        search_is_to_user:"",
        separation_because:"",
      }
    }
  }
  render() {
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
          </>
        </Router>
      </>
    )
  }
}

export default App
