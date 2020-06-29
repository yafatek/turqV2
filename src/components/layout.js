import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
            <div className="col-9 my-5 mx-auto">
                <main>{children}</main>
            </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
