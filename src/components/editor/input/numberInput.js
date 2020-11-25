import React from "react"
import PropTypes from "prop-types"
import NumberFormat from 'react-number-format';

class NumberInput extends React.Component {

  render() {
    let {inputRef, ...others} = this.props;
    return (
      <NumberFormat
        {...others}
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