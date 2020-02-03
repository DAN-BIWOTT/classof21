import React from 'react';
import Home from './home/components/SideBar';
import Login from './login/Main';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import AuthRoute from './util/AuthRoute';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  const token = localStorage.USERTOKEN
  let authenticated = false;
  
  if(token === undefined){
    window.location.href = '/#';
    authenticated = false;
  }else{
    const decodedToken = jwtDecode(token);
    if(decodedToken.exp * 1000 < Date.now()){
      window.location.href = '/#';
      authenticated = false;
    }else{
      authenticated = true;
    }
  }

  return (
    <React.Fragment>
      <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/home" component={ Home } />
          <AuthRoute exact path="/" component={ Login } authenticated={ authenticated }/>
        </Switch>
      </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
