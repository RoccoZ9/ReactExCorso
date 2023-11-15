import React, { Component } from "react";
import './search-box.css';


const SearchBar = ({ className, placeholder, onChangeHandler }) => {
    return (
        <div>
            <input
                className={`search-box ${className}`}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler} />
        </div>
    )
}

export default SearchBar;