import React from 'react'
import Button from './button'
import PropTypes from 'prop-types'

const SearchForm = ({onSearch=f=>f}) => {
    let _cityName
    const submit = e => {
        e.preventDefault()
        onSearch(_cityName.value)
    }

    return (
        <form className="form-inline search-form" onSubmit={submit}>
            <div className="form-group mr-2">
                <input type="text" className="form-control" 
                ref={input => _cityName = input} placeholder="Type a city name..."/>
            </div>
            <Button styles="success" type="submit">SEARCH</Button>
        </form>
    )
}

SearchForm.propTypes = {
    onSearch: PropTypes.func
}

SearchForm.defaultProps = {
    onSearch: f=>f
}

export default SearchForm