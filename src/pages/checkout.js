import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom"
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';
import {useStripe, useElements, CardNumberElement} from '@stripe/react-stripe-js';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';

import { THANKYOU_URL } from "../constants"
import Layout from "../components/layout/layout"
import Checkout from '../components/payments/checkout'
import { payment } from '../actions/paymentsActions'

  
function CheckoutForm({location, dispatch, isComplete, isSuccess, isFetching}) {

  const stripe = useStripe();
  const elements = useElements();
  const [cardName, setCardName] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (location.state.contest === undefined) {
      toast.error("No contest");
    }
  }, [location]);

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (amount === undefined || amount === null || amount === 0) {
      toast.error("Payment Failed: Please select a donation amount");
      return;
    } else if (amount < 1) {
      toast.error("Payment Failed: Minimum donation is $1.00");
      return;
    } else if (cardName === undefined || cardName === null || cardName === "") {
      toast.error("Payment Failed: Please Provide the name on your credit card");
      return
    }
    dispatch(payment(location.state.contest, amount, elements.getElement(CardNumberElement), cardName, stripe))
  };

  const handleChange = (event) => {
    setCardName(event.target.value)
  }

  const handleAmountChange = (event) => {
    setAmount(event.target.value)
  }

  return(
    <>
    { !isFetching && isComplete && isSuccess
    ? <Redirect to={THANKYOU_URL} />
    : <Layout fullWidth>
      <Grid container style={{padding: 40}}>
        <Grid container item direction="column" spacing={10} justify="center" alignItems="center" style={{padding: 20}}>
          <Grid container item xs={12} md={9}>
            <Checkout handleChange={handleChange} cardName={cardName} setAmount={setAmount} handleAmountChange={handleAmountChange}/>
            <Grid item container justify="center" style={{paddingTop: 20}}>
              <Grid item xs={12} md={3}>
                <Button fullWidth variant="contained" color="primary" type="submit" disabled={!stripe || isFetching} onClick={() => handleSubmit()}>
                  Pay Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
}
    </>
  )
}

function mapStateToProps(state) {

  const { auth, payments } = state
  const { isAuthenticated } = auth
  const { isFetching, isComplete, isSuccess } = payments

  return {
    isFetching,
    isComplete,
    isSuccess,
    isAuthenticated
  }
}

export default connect(mapStateToProps)(CheckoutForm)