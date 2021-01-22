import React from "react";
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Typography from '@material-ui/core/Typography';
import { Tooltip } from "@material-ui/core";

import PropTypes from "prop-types";

const textColor = "#7D7D7D",
  font = "Roboto 30px underline";

const ItemizedFundingItem = ({text, quantity, tip}) => (
  <TableRow style={{borderBottom: "none"}}>
    <TableCell align="left" >
      <Tooltip title={tip}>
        <Typography style={{font, color: textColor, textDecoration: "underline"}}>{text}</Typography>
      </Tooltip>
    </TableCell>
    <TableCell align="right">
      <Typography>{Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(quantity/100)}</Typography>
    </TableCell>
  </TableRow>
);

const drafterTooltipText = (
  <div>
    <Typography component="p">
      The Turq platform enables and funds the efforts to draft legislation to solve the problems of everyday people.
      The folks who draft legislation on the Turq platform are known as Citizen Lawmakers.
    </Typography>
    <Typography component="p">
      We believe the work of Citizen Lawmakers is valuable and should be compensated.
      Therefore, approximately 80% of all funds submitted to the platform go to supporting the work of Citizen Lawmakers.
    </Typography>
  </div>
);

const platFeeTooltipText = (
  <div>
    <Typography component="p">
      The platform fee is the money we here at Turq take as commission for our work.
      Our site needs funding in order to survive and bring new and better features to our users.
    </Typography>
    <Typography component="p">
      Turq is organized as a For-Benefit B Corp, which means we put our mission above everything.
      That mission is to turn everyday people into Citizen Lawmakers.
    </Typography>
  </div>
);

const procTooltipText = (
  <div>
    <Typography component="p">
      Here at Turq we use the trusted service Stripe to process all transactions on our platform.
      Stripe charges $0.30 for every transaction on top of a 2.9% fee.
    </Typography>
    <Typography component="p">
      We feel this fee is worth the cost given how respected a name Stripe is, and the easy experience it provides our users.
    </Typography>
  </div>
);


const ItemizedFunding = ({total}) => {
  const procFee = 0.029*total + 0.3,
    platFee = 0.2*total,
    drafterPay = 0.8*(total - procFee);

  return (
    <TableContainer>
      <Table cellPadding={0} size="small">
        <TableBody>
          <ItemizedFundingItem text="Pay to Drafter(s)" quantity={drafterPay} tip={drafterTooltipText} />
          <ItemizedFundingItem text="Platform Fee" quantity={platFee} tip={platFeeTooltipText} />
          <ItemizedFundingItem text="Processor Fee" quantity={procFee} tip={procTooltipText} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemizedFunding;

ItemizedFunding.propTypes = {
  total: PropTypes.number
};

ItemizedFunding.defaultProps = {
  total: 0
};
