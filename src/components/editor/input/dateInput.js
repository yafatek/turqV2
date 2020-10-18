import React from "react"
import PropTypes from "prop-types"
import DatePicker from "react-datepicker";

class DateInput extends React.Component {

  render() {
    return (
      <DatePicker
          className="editor-date col-12 form-control"
          selected={this.props.date}
          value={this.props.value}
          {...this.props}
      />
    )
  }
}

export default DateInput

DateInput.propTypes = {
  placeholder: PropTypes.string,
}

DateInput.defaultProps = {
  placeholder: "",
}