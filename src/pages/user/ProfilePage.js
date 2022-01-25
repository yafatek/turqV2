import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Layout from "../../components/layout/layout";
import {loadUserProfile} from "../../redux/actions/UserActions";
import SystemBackdrop from "../../components/widgets/backdrop/SystemBackdrop";
import FullWidthTabs from "../../components/tabs/TabPanel";
import {Redirect} from "react-router-dom";

function ProfilePage() {
    // const [userInfo, setUserInfo] = useState('');

    const token = useSelector(state => state.auth.token);
    // const email = localStorage.getItem('email');
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.get('isLoading'));
    //isLoading
    useEffect(() => {
        dispatch(loadUserProfile(token));
    }, [dispatch, token]);
    //
    if (!isAuthenticated) {
        return <Redirect to="/"/>
    }
    return (
        <div>
            <Layout fullWidth pageTitle="User Profile"
                    description="user profile information">
                {isLoading ?
                     <SystemBackdrop
                        open={true}
                     />
                    :
                     <FullWidthTabs/>
                 }
            </Layout>

        </div>
    )
}

export default ProfilePage;