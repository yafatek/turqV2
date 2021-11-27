import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Layout from "../../components/layout/layout";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function ProfilePage(props) {
    // const [userInfo, setUserInfo] = useState('');

    // const token = useSelector(state => state.auth.token);
    // const userInfo = useSelector(state => state.user.userInfo);
    return (
        <Layout fullWidth pageTitle="User Profile"
                description="demo for the user profile">
            <Grid container alignItems="flex-start" direction="column">
                <Grid item container direction="row" className="about-task" justify="center" alignItems="center">
                    <Grid item xs={12} md={2}>
                        <Typography align="center">
                            User Profile
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default ProfilePage;