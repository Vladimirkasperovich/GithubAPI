import React, {useEffect, useState} from 'react';
import s from "components/github/github.module.css";
import {SearchUser, UserType} from "components/github/Github";
import axios from "axios";
import {Timer} from "components/github/Timer";
type UserInfo = {
    selectedUser: SearchUser | null

}
export const UserInfo = ({selectedUser}: UserInfo) => {
    const [userDetails, setUserDetails] = useState<UserType | null>(null)

    useEffect(() => {
        console.log('Sync user details')
        if (selectedUser) {
            axios
                .get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
                .then(res => setUserDetails(res.data))
        }

    }, [selectedUser]);
    return (
        <div className={s.users}>
            <Timer userDetails={userDetails}/>
            <h2>
                {userDetails?.login}
            </h2>
            {selectedUser && <div>
                <img src={userDetails?.avatar_url} alt=""/>
                 followers: {userDetails?.followers}
            </div>}
        </div>
    );
};

