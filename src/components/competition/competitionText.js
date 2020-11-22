import React from "react"
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { DEFAULT_CONTEST_CRITERIA, DEFAULT_CONTEST_RULES } from "../../constants"

function CompetitionText ({title, description, rules, endDate}) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom  variant="h3" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <header>
            <p>
              Issue Close: {endDate === null ? "No Timeline Specified" : new Date(endDate).toDateString()}
            </p>
          </header>
        </Typography>
        <Typography gutterBottom  variant="h4" component="h2">
          Description
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <ReactMarkdown source={description} />
        </Typography>
        <Typography gutterBottom  variant="h4" component="h2">
          Rules
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <ReactMarkdown source={rules} />
          <ReactMarkdown source={DEFAULT_CONTEST_RULES} />
        </Typography>
        <Typography gutterBottom  variant="h4" component="h2">
          Legislation Acceptance Criteria
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <ReactMarkdown source={DEFAULT_CONTEST_CRITERIA} />
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CompetitionText

CompetitionText.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  rules: PropTypes.string,
  endDate: PropTypes.string
}

CompetitionText.defaultProps = {
  title: "",
  description: "",
  rules: "",
  endDate: "1970-1-1",
}