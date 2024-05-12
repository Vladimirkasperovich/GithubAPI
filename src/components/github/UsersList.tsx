import React, {useEffect, useState} from "react";
import axios from "axios";
import s from "components/github/github.module.css";
import {SearchResponse, SearchUser} from "components/github/Github";

type UsersList = {
    term: string
    onUserSelect: (user: SearchUser) => void
    selectedUser: SearchUser | null
}

export const UsersList = ({term, selectedUser, onUserSelect}: UsersList) => {
    const [users, setUsers] = useState<SearchUser[]>([]);
    useEffect(() => {
        console.log('Sync Users')
        axios
            .get<SearchResponse>(`https://api.github.com/search/users?q=${term}`)
            .then(res => {
                setUsers(res.data.items)
            })
    }, [term]);

    return <ul>
        {
            users.map((u) => <li key={u.id} className={selectedUser?.login === u.login ? s.selected : ''}
                                 onClick={() => {
                                     onUserSelect(u)
                                 }}>{u.login}</li>
            )
        }
    </ul>
}