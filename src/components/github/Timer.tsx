import React, {useEffect, useState} from 'react';
import {SearchUser, UserType} from "components/github/Github";
type Timer = {
    userDetails: UserType | null
}
export const Timer = ({userDetails}: Timer) => {
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        setSeconds(() =>  60)
    }, [userDetails]);

    useEffect(() => {
        const timerID = setInterval(() => {
            setSeconds((prevState) => {
                if (prevState > 0) {
                    return prevState - 1
                } else {
                    return 0
                }
            });
        }, 1000)
        return () => clearInterval(timerID)

    }, []);
    console.log(seconds)
    return (
        <div>
            {seconds}
        </div>
    );
};

