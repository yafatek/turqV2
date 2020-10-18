import React from "react"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import PropTypes from "prop-types";
import {  EDITOR_PAGE_URL } from "../../constants"
import { isPastEndDate } from "../../util/dateCompare"


const LegislationEditCard = ({legislation}) => (
  <Card>
    <CardContent>
      <Button
      color="primary"
      disabled={isPastEndDate(legislation.contest.endDate)}
      >
        <Typography variant="h5" component="h2">
          <Link to={EDITOR_PAGE_URL + "/legislation/" + legislation.id} >
            Update this legislation
          </Link>
        </Typography>
      </Button>
    </CardContent>
  </Card>
)

export default LegislationEditCard

LegislationEditCard.propTypes = {
  legislation: PropTypes.object
}

LegislationEditCard.defaultProps = {
  legislation: null
}