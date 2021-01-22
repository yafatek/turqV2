import React from "react"
import { Button, Container, Paper } from "@material-ui/core"
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import { CHECKOUT_PAGE_URL } from "../../constants";

import ItemizedFunding from "../funding/itemizedFunding";

import PropTypes from "prop-types";

const itemizedStyle = {
  backgroundColor: "#C4C4C4",
  color: "#7D7D7D",
  font: "Roboto 30px underline"
};

const ItemizedFundingCard = ({ currentFunding, contestId }) => (
  <Container padding={0}>
    <Card>
      <CardContent>

        <Typography variant="h4" color="textSecondary" component="h2">
          {/*Divide by 100 to convert to decimal because we handle everything as an int*/}
          { "Current Funding: " + Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(currentFunding/100)}
        </Typography>

      </CardContent>
      <CardActions>
        <Link to={{pathname: CHECKOUT_PAGE_URL, state: {contest: contestId}}}>
          <Button  color="primary">Support This Issue</Button>
        </Link>
      </CardActions>
    </Card>
    <Paper square width="95%" elevation={0} style={itemizedStyle}>
      <ItemizedFunding total={currentFunding} />
    </Paper>
  </Container>
)

export default ItemizedFundingCard

ItemizedFundingCard.propTypes = {
  currentFunding: PropTypes.number,
  contestId: PropTypes.number
}

ItemizedFundingCard.defaultProps = {
  currentFunding: 0,
  contestId: null
}
