import React from "react"
import PropTypes from "prop-types"

class TextInput extends React.Component {
  render() {
    return (
      <textarea
        { ...this.props }
        spellcheck="true"
        value={this.props.value === undefined ? "" : this.props.value}
      />
    )
  }
}

export default TextInput

TextInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string
}

TextInput.defaultProps = {
  placeholder: "",
  label: ""
}