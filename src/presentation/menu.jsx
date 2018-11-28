import React from 'react'
import SearchForm from './search'

const Menu = ({onSearch=f=>f}) => (
    <nav className="navbar navbar-light bg-light">
        <div className="container">
            <a href="/home" className="navbar-brand">Global Clock</a>

            <ul className="navbar-nav flex-row">
                <li className="nav-item mr-2">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item mr-2">
                    <a className="nav-link" href="#/about">About</a>
                </li>
            </ul>
            

            <div className="ml-auto">
                <SearchForm onSearch={onSearch}/>
            </div>
        </div>
        
    </nav>
)

export default Menu