import React from "react"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ItemizedFunding from "../funding/itemizedFunding";

import PropTypes from "prop-types";

const itemizedStyle = {
  backgroundColor: "#C4C4C4",
  color: "#7D7D7D",
  font: "Roboto 30px underline",
  margin: "auto",
  width: "95%"
};

const DonationBreakdownCard = ({ amount }) => (
    <Card style={{minHeight: "100%"}}>
      <CardContent>
        <Typography variant="h5" component="h5">
          { "Breakdown: " + Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount)}
        </Typography>
        <div style={itemizedStyle}>
          <ItemizedFunding total={amount*100}/>
        </div>
      </CardContent>
    </Card>
);

export default DonationBreakdownCard;

DonationBreakdownCard.propTypes = {
  amount: PropTypes.number
}

DonationBreakdownCard.defaultProps = {
  amount: 0
}
