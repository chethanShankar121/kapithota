import React from "react";
import './Navbar.scss';

const NAV_ITEMS = ['My Account','About', 'Contact', 'Shop', 'Coffee Tour'];
const Navbar = props => {
    return (
        <div id="navbar" className="flex full-width flex-align-center">
            {
                NAV_ITEMS.map((item, i) => <div key={i}>{item}</div>)
            }
        </div>
    )
}
export default Navbar;