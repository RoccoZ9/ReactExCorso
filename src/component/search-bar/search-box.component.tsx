import React, { ChangeEventHandler } from "react";
import './search-box.css';

export interface SearchBarProps extends ChangeHanlerProps {
    className: string;
    placeholder?: string;
}


export interface ChangeHanlerProps {
    onChangeHandler: ChangeEventHandler<HTMLInputElement>
}


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