import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from '../pages/Home'
  import CreateAcc from '../pages/CreateAcc'
  import Login from '../pages/Login'
  import ForgotPass from '../pages/ForgotPass'


function Routes() {
    return(
    <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/CreateAccount'>Create Account</Link>
            </li>
            <li>
              <Link to='/Login'>Login</Link>
            </li>
            <li>
              <Link to='/ForgotPassword'>Forgot Password</Link>
            </li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/CreateAccount'>
              <CreateAcc/>
            </Route>
            <Route path='/Login'>
              <Login/>
            </Route>
            <Route path='/ForgotPassword'>
              <ForgotPass/>
            </Route>
          </Switch>
        </nav>
    </Router>
    );
}

export default Routes;