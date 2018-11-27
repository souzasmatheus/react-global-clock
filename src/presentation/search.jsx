import React from 'react'
import Button from './button'

const SearchForm = ({onSearch=f=>f}) => (
    <form className="form-inline search-form" onSubmit={onSearch}>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Type a city name..."/>
        </div>
        <Button styles="success" type="submit">SEARCH</Button>
    </form>
)

export default SearchForm