import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Layout from "../../components/layout/layout";
import {loadUserProfile} from "../../redux/actions/UserActions";
import FullWidthTabs from "../../components/tabs/TabPanel";

function ProfilePage(props) {
    // const [userInfo, setUserInfo] = useState('');

    const token = useSelector(state => state.auth.token);
    const userInfo = useSelector(state => state.user.userInfo);
    //alert(JSON.stringify(token));

    const [userData, setUserData] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUserProfile(token));
    }, []);

    return (
        <Layout fullWidth pageTitle="User Profile"
                description="user profile information">
            <FullWidthTabs/>
        </Layout>
    )
}

export default ProfilePage;