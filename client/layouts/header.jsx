import React from 'react';
import { Link } from 'react-router';

const Header = () => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <Link to="/">Family Trees</Link>
                <a class="navbar-brand" href="#">Family Trees</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                {/* todo: setting <li className="active"> */}
                    <li><Link to="/search">Search</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Something</a></li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Header;