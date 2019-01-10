import React, { Component } from 'react'
import { Link } from 'gatsby'
import navStyles from './nav.module.css'

class Nav extends Component {
    render() {
        return (
            <nav className={navStyles.nav}>
                <ul className={navStyles.navList}>
                    <li className={navStyles.navListItem}><Link to="/services/">Services</Link></li>
                    <li className={navStyles.navListItem}>Contact</li>
                </ul>
            </nav>
        )
    }
}

export default Nav;