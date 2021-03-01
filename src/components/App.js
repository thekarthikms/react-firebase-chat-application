import '../styles/App.css';

import Firstview from './Firstview'
import Chatsection from './Chatsection/Chatsection'
import Sidesection from './Sidesection/Sidesection'
import Register from './Register/Register'
import Login from './Login/Login'
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom'
import {connect} from 'react-redux'
// import { useEffect, useState } from 'react';

function App(props) {
  let isLogged = props.isLogged
  console.log(isLogged)
  return (
    <div className="App">
      <div className="container">

      <Router>
     
          {isLogged
          ?
          <Route path="/chats" component={()=>{
            return (
              <div className="content">
                <Sidesection/>
                <Chatsection/>
              </div>
            )
          }}/>
          :<div className="content">
           
              <Switch>
                <Route path="/" exact component={Firstview}/>
                <Route path="/Register" component={Register}/>
                <Route path="/Login" component={Login}/>
              </Switch>
          
            </div>}</Router>
      </div>
    </div>
  );
}

let mapStateToProps = (state)=>{
  return {
    isLogged : state.userlog.isLogged
  }
}


export default connect(mapStateToProps,null)(App);
