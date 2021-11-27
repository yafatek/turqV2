import React, {useState} from 'react';
import {useSelector} from "react-redux";

function ProfilePage(props) {
    // const [userInfo, setUserInfo] = useState('');

    const token = useSelector(state => state.auth.token);
    const userInfo = useSelector(state => state.user.userInfo);
    return (
        <>
            <h1>Profile Page.</h1>
        </>
    )
}

export default ProgilePage;