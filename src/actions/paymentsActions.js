import axios from "axios"
import { toast } from 'react-toastify';
import { PAYMENTS_URL, TOKEN_ERROR_CODE } from "../constants"
import { logout } from './logout'

export const PAYMENT_REQUEST = 'PAYMENT_REQUEST '
export const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS '
export const PAYMENT_FAILURE = 'PAYMENT_FAILURE '

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
        console.log(res)
        if (res.paymentIntent.status === "succeeded") {
          toast.success("Payment Success");
          dispatch(paymentSuccess())
        }
      }).catch(function (error) {
        toast.error("Payment Failed: " + error.message);
      })
    }).catch(function (error) {
      dispatch(paymentFailure(error))
      if (error.response) {
        if (error.response.status === 400) {
          toast.error("You must log in to Donate");
        } else if (error.response.status === TOKEN_ERROR_CODE) {
          dispatch(logout())
        }
      } else {
          toast.error("Failed to Post Payment");
      }
    })
  }
}