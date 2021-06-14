import React from "react"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";

const statusList = [
  { id: 0, name: 'Fund Raising' },
  { id: 1, name: 'Drafting in Progress' },
  { id: 2, name: 'Submission in Progress' },
  { id: 3, name: 'Receiving Bill Number' },
  { id: 4, name: 'Committee' },
  { id: 5, name: '1st Chamber' },
  { id: 6, name: '2nd Committee' },
  { id: 7, name: '2nd Chamber' },
  { id: 8, name: 'Executive' }
]

class ContestStateCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: this.props.currentStatus.id }
    this.handleChange = this._handleChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentStatus.id !== this.props.currentStatus.id) {
      this.setState({ value: this.props.currentStatus.id });
    }
  }

  _handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { isAdmin, currentStatus, onSubmit } = this.props
    return (
      <Card height="100%">
        { isAdmin ?
          <CardContent>
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
              </Grid>
              <Grid item>
                <select name="status" value={this.state.value} onChange={this.handleChange} >
                  {statusList.map(status =>
                    <option key={status.id} value={status.id}>{status.name}</option>
                  )};
                </select>
              </Grid>
              <Grid item>
                <Button onClick={() => onSubmit(this.state.value)} color="primary">Submit</Button>
              </Grid>
            </Grid>
          </CardContent> : 
          <CardContent>
            <Typography variant="h4" color="textSecondary" component="h2">
              Issue Status
            </Typography>
          </CardContent>
        }
        <CardActions>
          <div style={{ padding: 10 }}>
            {statusList.map(status =>
              <Typography key={status.id} variant="body1" color={currentStatus.id === status.id ? 'textPrimary' : 'textSecondary'} component="div">
                {status.id} - {status.name}
              </Typography>
            )}
          </div>
        </CardActions>
      </Card>
    )
  }
}

export default ContestStateCard

ContestStateCard.propTypes = {
  isAdmin: PropTypes.bool,
  currentStatus: PropTypes.object,
  contestId: PropTypes.number
}

ContestStateCard.state = {
  value: -1
}

ContestStateCard.defaultProps = {
  isAdmin: false,
  currentStatus: null,
  contestId: null
}
