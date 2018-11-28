import React, {Component} from 'react'
import Button from './button'
import PropTypes from 'prop-types'

class SearchForm extends Component {
    constructor(props) {
        super(props)

        this.submit = this.submit.bind(this)
    }

    submit(e) {
        e.preventDefault()
        const {_cityName} = this.refs
        this.props.onSearch(_cityName.value)
    }

    render() {
        return (
            <form className="form-inline search-form" onSubmit={this.submit}>
                <div className="form-group mr-2">
                    <input type="text" className="form-control" 
                    ref="_cityName" placeholder="Type a city name..."/>
                </div>
                <Button styles="success" type="submit">SEARCH</Button>
            </form>
        )
    }
}

SearchForm.propTypes = {
    onSearch: PropTypes.func
}

SearchForm.defaultProps = {
    onSearch: f=>f
}

export default SearchForm