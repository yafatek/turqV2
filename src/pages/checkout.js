import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom"
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';
import {useStripe, useElements, CardNumberElement} from '@stripe/react-stripe-js';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';

import { PAYMENTS_URL, THANKYOU_URL } from "../constants"
import Layout from "../components/layout/layout"
import Checkout from '../components/payments/checkout'

  
function CheckoutForm({location, token}) {

  const stripe = useStripe();
  const elements = useElements();
  const [cardName, setCardName] = useState("");
  const [amount, setAmount] = useState(0);
  const [pending, setPending] = useState(false);
  const [completed, setCompleted] = useState(false);

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
    setPending(true);
    let config = {
      method: 'POST',
      url: PAYMENTS_URL + "/contest/" + location.state.contest,
      data: {
        // Stripe expects a no decimal long to represent the value
        // 100 = $1.00
        amount: amount*100 
      },
      headers: { Authorization: `Bearer ${token}` }
    }

    var response = await axios(config);

    var secret = response.data.secret;

    const result = await stripe.confirmCardPayment(secret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: cardName,
        },
      }
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      toast.error("Payment Failed: " + result.error.message);
      setPending(false);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        toast.success("Payment Success");
      }
      setPending(false);
      setCompleted(true);
    }

  };

  const handleChange = (event) => {
    setCardName(event.target.value)
  }

  const handleAmountChange = (event) => {
    setAmount(event.target.value)
  }

  return(
    <>
    { completed 
    ? <Redirect to={THANKYOU_URL} />
    : <Layout fullWidth>
      <Grid container style={{padding: 40}}>
        <Grid container item direction="column" spacing={10} justify="center" alignItems="center" style={{padding: 20}}>
          <Grid container item xs={12} md={9}>
            <Checkout handleChange={handleChange} cardName={cardName} setAmount={setAmount} handleAmountChange={handleAmountChange}/>
          </Grid>
          <Grid container item justify="center">
            <Grid item xs={12} md={3}>
              <Button fullWidth variant="contained" color="primary" type="submit" disabled={!stripe || pending} onClick={() => handleSubmit()}>
                Pay Now
              </Button>
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

  const { auth } = state
  const { isAuthenticated, token } = auth

  return {
    isAuthenticated,
    token
  }
}

export default connect(mapStateToProps)(CheckoutForm)