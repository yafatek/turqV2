import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';

import NumberInput from "../editor/input/numberInput"

const Donation = ({setAmount}) => {

  const [active, setActive] = useState("");
  const [displayAmount, setDisplayAmount] = useState();

  const setButtonAmount = (value, active) => {
    setAmount(value);
    setActive(active);
    setDisplayAmount("");
  }


  return (
    <Card className="checkout-card">
      <CardHeader title="Amount to Pledge" />
      <CardContent>
        <Grid container xs={12} spacing={2} alignItems="center" justify="flex-start">
          {/*Remember we don't set decimals for stripe so those amounts are correct --- 500 = $5.00 */}
          <Grid item xs={6}>
            <Button size="large" variant={active === "5" ? "contained" : "outlined"} fullWidth color="primary" onClick={() => setButtonAmount(5, "5")}> $5 </Button>
          </Grid>
          <Grid item xs={6}>
            <Button size="large" variant={active === "10" ? "contained" : "outlined"} fullWidth color="primary" onClick={() => setButtonAmount(10, "10")}> $10 </Button>
          </Grid>
          <Grid item xs={6}>
            <Button size="large" variant={active === "20" ? "contained" : "outlined"} fullWidth color="primary" onClick={() => setButtonAmount(20, "20")}> $20 </Button>
          </Grid>
          <Grid item xs={6}>
            <Button size="large" variant={active === "50" ? "contained" : "outlined"} fullWidth color="primary" onClick={() => setButtonAmount(50, "50")}> $50 </Button>
          </Grid>
          <Grid item xs={6}>
            <Button size="large" variant={active === "100" ? "contained" : "outlined"} fullWidth color="primary" onClick={() => setButtonAmount(100, "100")}> $100 </Button>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Other Amount"
              name="other"
              className={active === "other" ? "checkout-highlighted" : ""}
              variant="outlined"
              margin="dense"
              value={displayAmount} onChange={event => {setAmount(event.target.value); setActive("other"); setDisplayAmount(event.target.value);}}
              onClick={() => setActive("other")}
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={{
                inputComponent: NumberInput,
                startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  )
}

export default Donation

Donation.propTypes = {
  setAmount: PropTypes.func
}

Donation.defaultProps = {
  setAmount: null
}
