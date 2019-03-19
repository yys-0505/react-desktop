import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './containers/Login'
import Page from './components/layout/Page'
import NotFound from './containers/NotFound';
import './assets/css/index.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/app/menu1/sub1/opt1" push />} />
          <Route path="/login" component={Login} />
          <Route path="/app" component={Page} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
