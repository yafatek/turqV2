import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CardCvcElement,
    CardNumberElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import StripeInput from "./StripeInput"

const Checkout = ({handleChange, cardName, handleSubmit, isFetching, stripe}) => {

  return (
    <Card className="checkout-card">
      <CardHeader title="Credit Card Details" />
      <CardContent>
        <Grid container xs={12} spacing={2} alignItems="center" justify="flex-start">
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
      </CardContent>
      <CardActions>
        <Grid container xs={12} alignItems="center" justify="center">
          <Grid item>
            <Button size="large" variant="contained" color="primary" type="submit" disabled={!stripe || isFetching} onClick={() => handleSubmit()}>
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

export default Checkout

Checkout.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  cardName: PropTypes.string
}

Checkout.defaultProps = {
  handleChange: null,
  handleSubmit: null,
  cardName: ""
}
