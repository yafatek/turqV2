import React from "react"
import PropTypes from "prop-types"
import NumberFormat from 'react-number-format';

class NumberInput extends React.Component {

  render() {
    return (
      <NumberFormat
        {...this.props}
        thousandSeparator
        decimalScale={2}
      />
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