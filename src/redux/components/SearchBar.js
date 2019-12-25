import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';

const SearchBar = () => {
    const [currentValue, setCurrentValue] = useState("");
    const dispatch = useDispatch();

    const _handleClick = async () => {
        dispatch({ type: 'book/request' });
        try {
            const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${currentValue}`)
                .then(function (response) { return response.json() })
            const res = await result;
            dispatch({ type: 'book/success', data: res.items });
        }
        catch (error) {
            alert('ops');
        }
    };
    const _handleChange = (event) => {
        setCurrentValue(event.target.value);
    };
    return (
        <Fragment>
            <input onChange={_handleChange}></input>
            <button onClick={_handleClick}>Search</button>

        </Fragment>

    )

}

export default SearchBar;