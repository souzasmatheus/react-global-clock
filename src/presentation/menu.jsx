import React from 'react'
import SearchForm from './search'

const Menu = ({onSearch=f=>f}) => (
    <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">Global Clock</a>

        <div className="ml-auto">
            <SearchForm></SearchForm>
        </div>
    </nav>
)

export default Menu