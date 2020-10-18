import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { CardCvcElement,
    CardNumberElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';

import StripeInput from "./StripeInput"
import NumberInput from "../editor/input/numberInput"

const Checkout = ({handleChange, cardName, setAmount}) => {

  const [active, setActive] = useState("");
  const [displayAmount, setDisplayAmount] = useState();

  const setButtonAmount = (value, active) => {
    setAmount(value);
    setActive(active);
    setDisplayAmount("");
  }


  return (
        <Grid item container justify="space-between">
          <Grid item container xs={12} md={6} spacing={4} alignItems="flex-start" justify="flex-start">
            <Grid item container xs={12} spacing={4} alignItems="flex-start" justify="flex-start">
              <Grid item xs={12}>
                <h2>Amount to Pledge</h2>
              </Grid>
              <Grid item container xs={12} spacing={2} alignItems="center" justify="flex-start">
                {/*Remember we don't set decimals for stripe so those amounts are correct --- 500 = $5.00 */}
                <Grid item xs={6}>
                  <Button variant={active === "5" ? "contained" : "outlined"} fullWidth color="primary" onClick={() => setButtonAmount(5, "5")}> $5 </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant={active === "10" ? "contained" : "outlined"} fullWidth color="primary" onClick={() => setButtonAmount(10, "10")}> $10 </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant={active === "20" ? "contained" : "outlined"} fullWidth color="primary" onClick={() => setButtonAmount(20, "20")}> $20 </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant={active === "50" ? "contained" : "outlined"} fullWidth color="primary" onClick={() => setButtonAmount(50, "50")}> $50 </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant={active === "100" ? "contained" : "outlined"} fullWidth color="primary" onClick={() => setButtonAmount(100, "100")}> $100 </Button>
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
            </Grid>
          </Grid>
          <Grid item container spacing={2} xs={12} md={6} alignItems="flex-start">
            <Grid item container xs={12} spacing={4} alignItems="flex-start" justify="flex-start">
              <Grid item xs={12}>
                <h2>Credit Card Details</h2>
              </Grid>
              <Grid item container xs={12} spacing={2} alignItems="center" justify="flex-start">
                <Grid item xs={12}>
                  <TextField
                    id="cardName"
                    label="Name on Card"
                    fullWidth
                    margin="normal"
                    required
                    onChange={event => handleChange(event)}
                    value={cardName}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Credit Card Number"
                    name="ccnumber"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                        inputComponent: StripeInput,
                        inputProps: {
                            component: CardNumberElement
                        },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Experation Date"
                    name="Experation Date"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                        inputComponent: StripeInput,
                        inputProps: {
                            component: CardExpiryElement
                        },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="cvc"
                    name="cvc"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                        inputComponent: StripeInput,
                        inputProps: {
                            component: CardCvcElement
                        },
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
  )
}

export default Checkout

Checkout.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  setAmount: PropTypes.func,
  handleAmountChange: PropTypes.func,
  cardName: PropTypes.string
}

Checkout.defaultProps = {
  handleSubmit: null,
  handleChange: null,
  setAmount: null,
  handleAmountChange: null,
  cardName: ""
}
