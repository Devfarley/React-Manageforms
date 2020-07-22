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


function Routes(props) {
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
              <Home />
            </Route>
            <Route path='/CreateAccount'>
              <CreateAcc addUser={user => props.addUser(user)}/>
            </Route>
            <Route path='/Login'>
              <Login  userLogin={email => props.userLogin(email)}/>
            </Route>
            <Route path='/ForgotPassword'>
              <ForgotPass userForgotPass={(email, password) => props.userForgotPass(email, password)} />
            </Route>
          </Switch>
        </nav>
    </Router>
    );
}

export default Routes;