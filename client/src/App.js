import React, { Component } from 'react'
import { Router, Route} from 'react-router-dom'
import axios from 'axios'

import './Reset.css'
import './App.css'

import update from 'immutability-helper'

import Splash from './components/Splash'
// import Login from './components/LogIn'
import EnterInfoInstruction from './components/EnterInfoInstruction'
import EnterInfo1 from './components/EnterInfo1'
// import EnterInfo2 from './components/EnterInfo2'
import SearchInfoInstruction from './components/SearchInfoInstruction'
import SearchInfo1 from './components/SearchInfo1'
// import SearchInfo2 from './components/SearchInfo2'
// import SearchInfo3 from './components/SearchInfo3'
// import MatchedInfo from './components/MatchedInfo'
import StartSearch from './components/StartSearch'
import Closing from './components/Closing'
import Exit from './components/Exit'
import DisplayData from './components/DisplayData'
import Clarification from './components/Clarification'

import auth from './auth'
import history from './history'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email:"test_acct",
        first_name:"",
        alias:"",
        last_name:"",
        gender:"",
        dob_month_year:"",
        state:"",
      },
      searchInfo : {
        first_name:"",
        alias:"",
        last_name:"",
        gender:"",
        dob_month_year:"",
        state:"",
      },
      results : {

      }
    }
  }

  

  componentDidMount(){
    axios.get('/results',{},{
      headers: {
        Authorization: auth.authorizationHeader()
      }
    }).then(response => {
      this.setState({results: response.data.results[0]})
    })
  }

  
  saveUserChanges = (userChanges) => {
    this.setState({ user: update(this.state.user, { $merge: userChanges })})
  }
  

  saveSearchChanges = (searchChanges) => {
    this.setState({ searchInfo: update(this.state.searchInfo, { $merge: searchChanges })})
  }

  saveResults = (resultData) => {
    this.setState({ user: update(this.state.user, { $merge: resultData })})
  }

  

  render() {
    console.log(auth)
    // {(props) => <Splash {...props} test={this.state.test}/>}
    // console.log(getData)
    // this.getResults()

    return (
      
      <>
      
        <Router history={history}>
          <>
          {/*https://xd.adobe.com/view/c029d25b-319f-4b3a-63b9-19ad7296cdf7-b618/*/}
          <Route path="/" exact component={Splash} />

          <Route path="/login" render={() => auth.login({
            scope: 'openid email'
          })} />
          <Route path="/logout" render={() => {
            auth.logout()
            
            return <></>
          }} />

          <Route path="/callback" render={() => {
            auth.handleAuthentication(() => {
              axios.defaults.headers.common = {
                Authorization: auth.authorizationHeader()
              }
            })

            return <></>
          }}
        />

          <Route path="/enter_info_instruction" component={EnterInfoInstruction} />
          <Route path="/enter_info1" render={(props) => <EnterInfo1 {...props} user={this.state.user} saveUserChanges={this.saveUserChanges}/>} />
          {/* <Route path="/enter_info2" render={(props) => <EnterInfo2 {...props} user={this.state.user} saveUserChanges={this.saveUserChanges}/>} /> */}
          <Route path="/search_info_instruction" component={SearchInfoInstruction} />
          <Route path="/search_info1" render={(props) => <SearchInfo1 {...props} searchInfo={this.state.searchInfo} saveSearchChanges={this.saveSearchChanges}/>} />
          {/* <Route path="/search_info2" render={(props) => <SearchInfo2 {...props} searchInfo={this.state.searchInfo} saveSearchChanges={this.saveSearchChanges}/>} /> */}
          {/* <Route path="/search_info3" render={(props) => <SearchInfo3 {...props} searchInfo={this.state.searchInfo} saveSearchChanges={this.saveSearchChanges}/>} /> */}
          <Route path="/start_search" render={(props) => <StartSearch {...props} searchInfo={this.state.searchInfo} userInfo={this.state.user}/>} /> />
          <Route path="/clarify" exact component={(props) => <Clarification {...props} results={this.state.results} />} />
          <Route path="/closing" component={Closing} />
          <Route path="/exit" component={Exit} />
          <Route path="/display" component={(props) => <DisplayData {...props} search={this.state.results} />} />
          </>
        </Router>
      </>
    )
  }
}

export default App
