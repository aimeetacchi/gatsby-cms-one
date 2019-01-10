import React, { Component } from 'react'

import Nav from '../components/nav'

class Header extends Component {
    render() {
        return (
            <header>
                <Nav />
                <div className="header-content">
                    <img src="" alt="logo" />
                    <h1>My Gatsby Site One</h1>
                </div>
            </header>
        )
    }
}

export default Header;