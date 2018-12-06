import React from 'react'
import SearchForm from './search'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Menu = ({onSearch=f=>f}) => (
    <nav className="navbar navbar-light bg-light">
        <div className="container">
            <a href="/home" className="navbar-brand">Global Clock</a>

            <ul className="navbar-nav flex-row mr-md-auto">
                <li className="nav-item mr-2">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item mr-2">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
            </ul>
            

            <div className="mx-auto mx-md-0">
                <SearchForm onSearch={onSearch}/>
            </div>
        </div>
        
    </nav>
)

Menu.propTypes = {
    onSearch: PropTypes.func
}

export default Menu