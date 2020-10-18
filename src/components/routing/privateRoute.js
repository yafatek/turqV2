import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { toast } from 'react-toastify'

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {

  if (!isAuthenticated) {
    toast.info("Please log in to view this page, you will be automatically redirected after login")
  }

  return (
    <Route {...rest} render={props =>
        isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{ pathname: "/login", state: { referer: props.location } }} />
      }
    />
  );
}

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated } = auth

  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(PrivateRoute)