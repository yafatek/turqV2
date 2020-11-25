import axios from "axios"
import { toast } from 'react-toastify';
import { PAYMENTS_URL, TOKEN_ERROR_CODE } from "../constants"
import { logout } from './logout'

export const PAYMENT_REQUEST = 'PAYMENT_REQUEST '
export const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS '
export const PAYMENT_FAILURE = 'PAYMENT_FAILURE '
export const PAYMENT_RESET = 'PAYMENT_RESET '

function paymentRequest() {
  return {
    type: PAYMENT_REQUEST,
    isFetching: true,
    isComplete: false,
    isSuccess: false,
  }
}

function paymentSuccess() {
  return {
    type: PAYMENT_SUCCESS,
    isFetching: false,
    isComplete: true,
    isSuccess: true,
  }
}

function paymentFailure() {
  return {
    type: PAYMENT_FAILURE,
    isFetching: false,
    isComplete: true,
    isSuccess: false,
  }
}

function paymentReset() {
  return {
    type: PAYMENT_RESET,
    isFetching: false,
    isComplete: false,
    isSuccess: false,
  }
}

export function resetPayment() {
  return dispatch => {
    dispatch(paymentReset())
  }
}

export function payment(contestId, amount, CardNumberElement, cardName, stripe) {
  let config = {
    method: 'POST',
    url: PAYMENTS_URL + "/contest/" + contestId,
    data: {
      // Stripe expects a no decimal long to represent the value
      // 100 = $1.00
      amount: amount*100 
    },
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  }

  return dispatch => {
    // We dispatch request to kickoff the call to the API
    dispatch(paymentRequest())

    axios(config)
    .then(res => {
      var secret = res.data.secret;

      stripe.confirmCardPayment(secret, {
        payment_method: {
          card: CardNumberElement,
          billing_details: {
            name: cardName,
          },
        }
      })
      .then(res => {
        if (res.error) {
          toast.error("Payment Failed: " + res.error.message);
          dispatch(paymentReset())
        }
        else if (res.paymentIntent.status === "succeeded") {
          toast.success("Payment Success");
          dispatch(paymentSuccess())
        }
      }).catch(function (error) {
        toast.error("Payment Failed: " + error.message);
        dispatch(paymentReset())
      })
    }).catch(function (error) {
      dispatch(paymentFailure(error))
      if (error.response) {
        if (error.response.status === 400) {
          toast.error("You must log in to Donate");
          dispatch(logout())
          dispatch(paymentReset())
        } else if (error.response.status === TOKEN_ERROR_CODE) {
          toast.error("Please log back in");
          dispatch(logout())
          dispatch(paymentReset())
        }
      } else {
          toast.error("Failed to Post Payment");
          dispatch(paymentReset())
      }
    })
  }
}