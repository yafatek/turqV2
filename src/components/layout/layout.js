import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {Helmet} from "react-helmet";
import Grid from '@material-ui/core/Grid';

import { logout } from "../../actions/logout"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, isAuthenticated, logout, pageTitle, description }) => {
  return (
    <>
      <div className="site">
      <Helmet>
          <meta name="description" content={description} />
          <title>{pageTitle}</title>
      </Helmet>
      <Grid direction="column" container className="main">
        <Grid direction="row" item container>
          <Header  logout={logout} isAuthenticated={isAuthenticated}/>
        </Grid>
        <Grid direction="row" item container className="main">
          {children}
        </Grid>
        <Grid direction="row" item container>
          <Footer />
        </Grid>
      </Grid>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func,
  pageTitle: PropTypes.string,
  description: PropTypes.string
}

Layout.defaultProps = {
  children: null,
  fullWidth: false,
  isAuthenticated: false,
  logout: null,
  pageTitle: "Turq",
  description: "Make direct democracy viable by enabling citizens to draft and submit their own legislation."
}

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated } = auth

  return {
    isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
