import React, {useEffect} from 'react';
import s from "components/github/github.module.css";
import {SearchUser, UserType} from "components/github/Github";
import axios from "axios";
type UserInfo = {
    selectedUser: SearchUser | null
    userDetails: UserType | null
    setUserDetails: (u:UserType) => void
}
export const UserInfo = ({selectedUser, userDetails, setUserDetails}: UserInfo) => {
    useEffect(() => {
        console.log('Sync user details')
        if (selectedUser) {

            debugger
            axios
                .get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
                .then(res => setUserDetails(res.data))
        }

    }, [selectedUser]);
    return (
        <div className={s.users}>
            <h2>
                Username
            </h2>
            {selectedUser && <div>
                <img src={userDetails?.avatar_url} alt=""/>
                {userDetails?.login}, followers: {userDetails?.followers}
            </div>}
        </div>
    );
};

