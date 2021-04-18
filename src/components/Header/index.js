import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <nav className="nav" role="navigation">
                <div className="nav-wrapper container">
                    <a id="logo-container" href="/index" className="brand-logo">Home</a>
                    <ul className="right hide-on-med-and-down">
                        <li className="active"><Link to="/index">About</Link></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><Link to="/languages">Technologies</Link></li>
                        <li><a href="/hireme">Hire Me</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    <ul id="nav-mobile" className="sidenav">
                        <li><Link to="/index">About</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/languages">Technologies</Link></li>
                        <li><a href="/hireme">Hire Me</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <Link to="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                </div>
            </nav>
        )
    }
}

export default Header;