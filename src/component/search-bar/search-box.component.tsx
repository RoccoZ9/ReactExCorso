import React, { ChangeEvent } from "react";
import './search-box.css';
import { SearchBarProps } from "../../util/myInterface";


const SearchBar = ({ className, placeholder, onChangeHandler }: SearchBarProps) => {

    return (
        <div>
            <input
                className={`search-box ${className}`}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </div>
    );
}

export default SearchBar;