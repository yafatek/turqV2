import React from "react"
import { connect } from 'react-redux'
import { Redirect, Link } from "react-router-dom"
import { login } from "../actions/login"
import StringInput from "../components/editor/input/stringInput"
import Layout from "../components/layout"

class LoginPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = { register: false, creds: { email: '', password: ''}}
    this.handleChange = this._handleChange.bind(this)
  }

  _handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ ...this.state,
      creds: { ...this.state.creds, [name]: value }
    });
  }

  render() {

    var referer = '/'
    if (this.props.location.state) {
      referer = this.props.location.state.referer || '/';
    }
    if (this.props.isAuthenticated) {
      console.log("redirect")
      return <Redirect to={referer} />
    }

    return (
      <Layout>
        <div className="login-form col col-md-6 mx-auto">
          <form>
            <h2>Sign In</h2>

            <div className="form-group">
              <label>Email address</label>
              <StringInput
                placeholder="email"
                className="login-form col-12 form-control"
                onChange={event => this.handleChange(event)}
                name="email"
                value={this.state.creds.email}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <StringInput
                className="login-form col-12 form-control"
                type="password"
                placeholder="password"
                onChange={event => this.handleChange(event)}
                name="password"
                value={this.state.creds.password}
              />
            </div>

            <button
            onClick={(e) => {e.preventDefault(); this.props.dispatch(login(this.state.creds))}}
            className="btn btn-primary btn-block">Login</button>
            <span className="float-right">First Time?&nbsp;<Link className="float-right" to="/register">Create New Account</Link></span>
          </form>
        </div>
      </Layout>
    )
  }
}

function mapStateToProps(state) {

  const { auth } = state
  const { isAuthenticated } = auth
  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(LoginPage)