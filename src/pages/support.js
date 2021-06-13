import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Layout from "../components/layout/layout";
import CheckoutMini from "../components/payments/checkoutMini";

function SupportPage() {

    return (
        <Layout>
            <Grid container justify="center" align="center">
                <Grid item xs={12} md={12} className="support-hero" zeroMinWidth>
                    <Paper className="intro">
                        <div>
                            <p>People come to Turq to see real change.</p>
                            <p>Show your support with a one-time payment to drive the mission that makes lawmakers take notice.</p>
                        </div>
                    </Paper>
                    <CheckoutMini/>
                </Grid>
                <Grid container direction="column" justify="flex-start"  alignItems="center" className="support-body">
                    <Grid container justify="center" className="support-body-header">
                        <Typography variant="h5" gutterBottom className="title">
                            We can’t do this without the generous support of yourself and other like you.
                        </Typography>
                        <Typography  variant="subtitle1" gutterBottom className="extra">
                            These are just a few of the things we’re delivering.
                        </Typography>
                    </Grid>
                    <Grid container justify="center" className="support-body-subwrap">
                        <Grid className="sub">
                            <div><img src="/images/change.png" alt="Powered by Stripe"/></div>
                            <Grid container className="desc" alignItems="center">
                                <Typography variant="h6">
                                    Giving people a means of making real change
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid className="sub">
                            <div><img src="/images/tools.png" alt="Powered by Stripe"/></div>
                            <Grid container className="desc" alignItems="center">
                                <Typography variant="h6">
                                    Creating tools for everyday peope and pros alike
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid className="sub">
                            <div><img src="/images/ignored.png" alt="Powered by Stripe"/></div>
                            <Grid container className="desc" alignItems="center">
                                <Typography variant="h6">
                                    Ensuring you are never ignored again
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" className="support-mid-section">
                        <Typography variant="caption" className="info">
                            Contributions are not tax-deductible.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default SupportPage
