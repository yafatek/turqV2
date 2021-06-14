import React, { useState} from "react";
import { Redirect } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import { toast } from 'react-toastify';
import { connect } from 'react-redux'
import {useStripe, useElements, CardNumberElement} from '@stripe/react-stripe-js';

import Checkout from "./checkout";
import Donation from "./donation";
import AddressCard from "./addressCard";
import { THANKYOU_URL } from "../../constants"
import { supportPayment } from '../../actions/paymentsActions'

const CheckoutMini = ({dispatch, isComplete, isSuccess, isFetching}) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardName, setCardName] = useState("");
    const [amount, setAmount] = useState(0);

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
        // The API endpoint should be updated to /payments/support in the future.
        dispatch(supportPayment(amount, elements.getElement(CardNumberElement), cardName, stripe))
      };
    const handleChange = (event) => {
        setCardName(event.target.value)
    }

    return (
      <>
      { !isFetching && isComplete && isSuccess
        ? <Redirect to={THANKYOU_URL} /> 
        : <div className="checkout-page">
            <Grid container 
                spacing={0} 
                justify="center" 
                alignItems="stretch"  
                style={{width: "140%", height: "140%", transform: `scale(0.714, 0.714)`, transformOrigin: "left top" }}
            >
                <Grid container item xs={12} md={12}>
                    <Donation setAmount={setAmount}/>
                </Grid>
                <Grid container item xs={12} md={12} alignItems="stretch">
                    <AddressCard/>
                </Grid>
                <Grid container item xs={12} md={12} alignItems="stretch">
                    <Checkout
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        cardName={cardName}
                        stripe={stripe}
                        isFetching={false}
                    />
                </Grid>
            </Grid>   
            <Grid container justify="center" className="powered">
                <img src="/images/stripe-blurple.png" alt="Powered by Stripe" style={{height:25, width:110}}/>
            </Grid>
        </div>
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
export default connect(mapStateToProps)(CheckoutMini)