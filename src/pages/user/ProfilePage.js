import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Layout from "../../components/layout/layout";
import {loadUserProfile} from "../../redux/actions/UserActions";

function ProfilePage() {
    // const [userInfo, setUserInfo] = useState('');

    const token = useSelector(state => state.auth.token);
    // const email = localStorage.getItem('email');
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.get('isLoading'));

    useEffect(() => {
        dispatch(loadUserProfile(token));
    }, [dispatch, token]);
    //
    // if (!isAuthenticated) {
    //     return <Redirect to="/"/>
    // }
    return (
        <>
            <Layout fullWidth pageTitle="User Profile"
                    description="user profile information">
                <h1> Profile...</h1>
                {/*{isLoading ?*/}
                {/*     <SystemBackdrop*/}
                {/*        open={true}*/}
                {/*     />*/}
                {/*    :*/}
                {/*     <FullWidthTabs/>*/}
                {/* }*/}
            </Layout>

        </>
    )
}

export default ProfilePage;