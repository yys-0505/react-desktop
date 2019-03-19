import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({component: ComposedComponent, ...rest}) => {
  class Authentication extends Component {
    render() {
      return (
        <Route
          {...rest}
          render={props => 
            this.props.login ? (
              <ComposedComponent {...props} />
            ) : (
              <Redirect to={{
                pathname: "/login",
                state: { from: props.location }
              }} />
            )
          }
        />
      )
    }
  }

  const mapStateToProps = (state) => ({
    login: state.getIn(["page", "login"])
  });

  const AuthenticationContainer = connect(mapStateToProps, null)(Authentication);
  return <AuthenticationContainer />
};