import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom"
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';
import {useStripe, useElements, CardNumberElement} from '@stripe/react-stripe-js';
import { connect } from 'react-redux'

import { THANKYOU_URL } from "../constants"
import Layout from "../components/layout/layout"
import Checkout from '../components/payments/checkout'
import Donation from '../components/payments/donation'
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

  return(
    <>
    { !isFetching && isComplete && isSuccess
    ? <Redirect to={THANKYOU_URL} />
    : <Layout fullWidth>
      <div className="checkout-page">
        <Grid container spacing={5} justify="center" alignItems="stretch">
          <Grid container item xs={12} md={6}>
            <Donation setAmount={setAmount} />
          </Grid>
          <Grid container item xs={12} md={6}>
            <Checkout
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                cardName={cardName}
                stripe={stripe}
                isFetching={isFetching}
              />
          </Grid>
          <Grid container item xs={12} justify="center">
            <Grid item>
              <img src="/images/stripe-blurple.png" alt="Powered by Stripe" style={{height:50}}/>
            </Grid>
          </Grid>
        </Grid>
      </div>
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