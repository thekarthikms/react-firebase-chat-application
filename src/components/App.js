import '../styles/App.css';

import Firstview from './Firstview'
import Chatsection from './Chatsection/Chatsection'
import Sidesection from './Sidesection/Sidesection'
import Register from './Register/Register'
import Login from './Login/Login'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  let isLogged = false
  return (
    <div className="App">
      <div className="container">

      <Router>
          {isLogged
          ?<Route path="/chats" component={()=>{
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

export default App;
