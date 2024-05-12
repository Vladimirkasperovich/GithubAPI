import React, {useEffect, useLayoutEffect, useState} from 'react';
import s from 'components/github/github.module.css'
import axios from "axios";
import {Search} from "components/github/Search";
import {UsersList} from "components/github/UsersList";
import {UserInfo} from "components/github/UserInfo";


export type SearchUser = {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
    score: number
}
export type SearchResponse = {
    total_count: number,
    incomplete_results: boolean,
    items: SearchUser[]

}
export type UserType = {
    login: string
    id: number
    avatar_url: string
    followers: number
}


const Github = () => {
    const [selectedUser, setSelectedUser] = useState<SearchUser | null>(null)
    const [userDetails, setUserDetails] = useState<UserType | null>(null)
    const [searchTerm, setSearchTerm] = useState('it-kamasutra')

    useEffect(() => {
        console.log('Sync title')
        if (selectedUser) {
            document.title = selectedUser.login
        }

    }, [selectedUser]);



    return (
        <div className={s.container}>
            <div>
                {/*<input value={tempSearch} type="text" placeholder='search'*/}
                {/*       onChange={(event) => setTempSearch(event.target.value)}/>*/}
                {/*<button onClick={clickHandler}>find</button>*/}
                <Search value={searchTerm} onSubmit={(fixedValue: string) => {
                    setSearchTerm(fixedValue)
                }}/>
                <button onClick={() => {
                    debugger;
                    setSearchTerm('it-kamasutra')
                }}>reset
                </button>
                {/*<ul>*/}
                {/*    {*/}
                {/*        users.map((u) => <li key={u.id} className={selectedUser?.login === u.login ? s.selected : ''}*/}
                {/*                             onClick={() => {*/}
                {/*                                 setSelectedUser(u)*/}
                {/*                             }}>{u.login}</li>*/}
                {/*        )*/}
                {/*    }*/}
                {/*</ul>*/}
                <UsersList term={searchTerm}
                           onUserSelect={setSelectedUser}
                           selectedUser={selectedUser}/>
            </div>
            <UserInfo selectedUser={selectedUser} userDetails={userDetails} setUserDetails={setUserDetails}/>
        </div>

    );
};

export default Github;