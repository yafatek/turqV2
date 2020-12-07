import React from "react"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import {  EDITOR_PAGE_URL } from "../../constants"

import LegislationList from "../legislation/legislationList"
import {isPastEndDate } from "../../util/dateCompare"
import PropTypes from "prop-types";


const ContestSubmissionsCard = ({contest, legislationList}) => (
  <Card height="100%">
    <CardContent>
      <Typography variant="h4" color="textSecondary" component="h2">
        Legislation Submitted For This Issue
      </Typography>
      <LegislationList legislation={legislationList}/>
    </CardContent>
    <CardActions>
      <Link to={EDITOR_PAGE_URL + "/legislation?contest=" + contest.id} >
        {!isPastEndDate(contest.endDate)
          ? <Button color="primary"> Create New Legislation</Button>
          : null
        }
      </Link>
    </CardActions>
  </Card>
)

export default ContestSubmissionsCard

ContestSubmissionsCard.propTypes = {
  contest: PropTypes.object,
  legislationList: PropTypes.array
}

ContestSubmissionsCard.defaultProps = {
  contest: null,
  legislationList: []
}