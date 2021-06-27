import React,{useState} from "react"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import {useStore,useDispatch} from "react-redux"
import axios from "axios"
import { useHistory } from "react-router"
import { toast } from "react-toastify"
import {POST_CONTEST_URL, TOKEN_ERROR_CODE} from "../../constants"
import Donation from "../payments/donation"
import DonationBreakdownCard from '../payments/donationBreakdownCard';
import {useStripe, useElements, CardNumberElement} from '@stripe/react-stripe-js';
import Checkout from "../payments/checkout"
import { payment } from "../../actions/paymentsActions"
import { logout } from '../../actions/logout'

export const FundingForm = (props) => {
    const dispatch = useDispatch()
    
    const stripe = useStripe();
    const elements = useElements();
    const [cardName, setCardName] = useState("");
    const [funding,setFunding] = useState(0)
    
    const store = useStore()
    const goBack = () => {
        props.changeTab(3,80)
    }
    const history = useHistory()
    const handleSubmit = async () => {
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
    
        if (funding === undefined || funding === null || funding === 0) {
          toast.error("Payment Failed: Please select a donation amount");
          return;
        } else if (funding < 1) {
          toast.error("Payment Failed: Minimum donation is $1.00");
          return;
        } else if (cardName === undefined || cardName === null || cardName === "") {
          toast.error("Payment Failed: Please Provide the name on your credit card");
          return
        }
        dispatch({type:"SAVE_FUNDING",funding:funding})
        // Delete following two lines once DB updates are made
        var issue = store.getState().postIssue;
        var description = issue.description + "\n\n" 
                        + issue.legislation + "\n\n"
                        + issue.location + "\n\n";
        issue.description = description;
        var config = {
            method:"POST",
            url:POST_CONTEST_URL,
            data: issue,
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }
        const contestID = await axios(config).then((response) => {
          return response.data.id
        }).catch(function (error) {
          if (error.response) {
            if (error.response.status === 400) {
              toast.error("You must log in to make changes to a contest");
          } else if (error.response.status === TOKEN_ERROR_CODE) {
            toast.error("Please log back in");
            dispatch(logout())
          }
      }
    })
        dispatch(payment(contestID, funding, elements.getElement(CardNumberElement), cardName, stripe))
        store.subscribe(() => {
          if(store.getState().payments.isSuccess){
            history.push(`/contest/${contestID}`)
          }
        })
        
      };
    const share = async () => {
        dispatch({type:"SAVE_FUNDING",funding:funding})
        var config = {
            method:"POST",
            url:POST_CONTEST_URL,
            data:store.getState().postIssue,
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }
        axios(config).then((response) => {
            history.push(`/contest/${response.data.id}`)
        }).catch((error) => {
            toast.error(error)
        })
    }
    return (
        <div hidden={props.value !== props.index} className="fundingForm">
            <Paper elevation={3}>
            <Donation setAmount={setFunding}/>
            </Paper>
            <Paper elevation={3} style={{marginTop:"10px"}}>
            <DonationBreakdownCard amount={funding}/>
            </Paper>
            <Paper elevation={3} classes={{root:"cardPaper"}}>
            <Grid container spacing={1} classes={{root:"cardGrid"}}>
                <Checkout 
                cardName={cardName}
                stripe={stripe}
                handleSubmit={handleSubmit}
                handleChange={(event) => setCardName(event.target.value)}
                />
            </Grid>
            <Grid item style={{padding:10}}>
            <img src="/images/stripe-blurple.png" alt="Powered by Stripe" style={{height:50}}/>
            </Grid>
            </Paper>
            <Button onClick={goBack}>Back</Button>
            <Button classes={{root:"payButton"}} onClick={share} disabled={funding === 0}>Can't Fund? Share instead</Button>
        </div>
    )
}

export default FundingForm