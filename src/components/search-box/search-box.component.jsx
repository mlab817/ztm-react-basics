import { Component } from "react"

import './search-box.styles.css'

const SearchBox = ({ className, placeholder, onChangeHandler}) => (
  <input
    type="search"
    className={`search-box ${className}`}
    placeholder={placeholder}
    onChange={onChangeHandler}/>
)

export default SearchBox