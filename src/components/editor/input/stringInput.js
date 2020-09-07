import React from "react"
import PropTypes from "prop-types"

class StringInput extends React.Component {
  render() {
    return (
      <input
        { ...this.props }
        spellcheck="true"
        value={this.props.value === undefined ? "" : this.props.value}
      />
    )
  }
}

export default StringInput

StringInput.propTypes = {
  placeholder: PropTypes.string,
}

StringInput.defaultProps = {
  placeholder: "",
}