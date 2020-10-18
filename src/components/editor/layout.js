import React from "react"
import PropTypes from "prop-types"

import EditorHeader from "./header"
import Footer from "../layout/footer"

const EditorLayout = ({ children, onSubmit }) => {
  return (
    <div className="site">
      <EditorHeader onSubmit={onSubmit} />
        <div className="container-fluid main">
          <div className="row">
            <div className="col-12 mx-auto" >
              <main className="">
                {children}
              </main>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

EditorLayout.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool
}

EditorLayout.defaultProps = {
  children: null,
  fullWidth: false
}

export default EditorLayout
