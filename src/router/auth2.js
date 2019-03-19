import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component {
  render() {
    let { login, component, path, location } = this.props;
    return (
      login
      ? <Route path={path} component={component} />
      : <Redirect to={{
          pathname: "/login",
          state: { from: location }
        }} />
    )
  }
};

const mapStateToProps = (state) => ({
  login: state.getIn(["page", "login"])
});

export default connect(mapStateToProps, null)(PrivateRoute);