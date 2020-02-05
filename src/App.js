import React from 'react';
import Home from './home/components/SideBar';
import Login from './login/Main';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';

import AuthRoute from './util/AuthRoute';
import { useDispatch, useSelector } from 'react-redux';

import jwtDecode from 'jwt-decode';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser } from './redux/actions/userActions';
import Axios from 'axios';

const App = () => {
  const token = localStorage.USERTOKEN
  
  const dispatch = useDispatch();
  if(token === undefined){
    dispatch(logoutUser);
  }else{
    const decodedToken = jwtDecode(token);
    if(decodedToken.exp * 1000 < Date.now()){
      dispatch(logoutUser);
    }else{
      dispatch({type: SET_AUTHENTICATED});
      Axios.defaults.headers.common['Authorization'] = token;
    }
  }
 const AuthState = useSelector(state => state.user.authenticated)
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/home" component={ Home } />
          <AuthRoute exact path="/" component={ Login } authenticated = { AuthState }/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
