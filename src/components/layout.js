import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, fullWidth }) => {
  return (
    <div className="site">
      <Header />
        <div className="container-fluid main">
          <div className="row">
            <div
              className={fullWidth ? "col-12" : "col-9 my-5 mx-auto"}
            >
              <main>{children}</main>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
