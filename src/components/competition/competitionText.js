import React from "react"
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { DEFAULT_CONTEST_CRITERIA, DEFAULT_CONTEST_RULES } from "../../constants";

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
        <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="Issue-Description-content"
              id="Issue-Description-header"
            >
              <Typography gutterBottom  variant="h4" component="h2">
                Description
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="textSecondary" component="div">
                <ReactMarkdown source={description} />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="Issue-Rules-content"
              id="Issue-Rules-header"
            >
              <Typography gutterBottom  variant="h4" component="h2">
                Rules
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="textSecondary" component="div">
                <ReactMarkdown source={rules} />
                <ReactMarkdown source={DEFAULT_CONTEST_RULES} />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="Issue-Acceptance-content"
              id="Issue-Acceptance-header"
            >
              <Typography gutterBottom  variant="h4" component="h2">
                Legislation Acceptance Criteria
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="textSecondary" component="div">
                <ReactMarkdown source={DEFAULT_CONTEST_CRITERIA} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>

  );
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
