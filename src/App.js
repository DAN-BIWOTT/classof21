import React from 'react';
import Home from './home/components/SideBar';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
