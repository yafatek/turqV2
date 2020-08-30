import React from "react"
import PropTypes from "prop-types"
import NumberFormat from 'react-number-format';

class NumberInput extends React.Component {

  render() {
    return (
      <NumberFormat {...this.props} />
    )
  }
}

export default NumberInput

NumberInput.propTypes = {
  placeholder: PropTypes.string,
}

NumberInput.defaultProps = {
  placeholder: "",
}