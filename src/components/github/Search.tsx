import React, {useEffect, useState} from "react";

type Search = {
    value: string
    onSubmit: (fixedValue: string) => void
}
export const Search = ({value, onSubmit}: Search) => {
    const [tempSearch, setTempSearch] = useState('');

    useEffect(() => {
        setTempSearch(value);
    }, [value]);
    const clickHandler = () => {
        onSubmit(tempSearch)
    }

    return (
        <div>
            <input value={tempSearch} type="text" placeholder='search'
                   onChange={(event) => setTempSearch(event.target.value)}/>
            <button onClick={clickHandler}>find</button>
        </div>

    )
}