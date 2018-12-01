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
        <form onSubmit={submit}>
            <div className="form-row">
                <div className="col-8">
                    <input type="text" className="form-control" 
                    ref={input => _cityName = input} placeholder="Type a city name..."/>
                </div>
                <div className="col">
                    <Button styles="success form-control" type="submit">SEARCH</Button>
                </div>
            </div>
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