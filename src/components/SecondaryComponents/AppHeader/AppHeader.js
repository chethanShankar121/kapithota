import React from "react";
import './AppHeader.scss';
import Navbar from "../Navbar/Navbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Search from "../../shared/Search/Search";
import Logo from './../../../assets/icons/Logo.png';

const AppHeader = props => {
    return (
        <div id="app-header" className="flex full-width flex-align-center">
            <div className="flex flex-align-center left-part">
                <div className="icon-container">
                    <img src={Logo} />
                </div>
                <Navbar />
            </div>
            <div className="flex flex-align-center flex-justify-end right-part">
                <div className="my-account-section flex flex-align-center">
                    <Search />
                </div>
                <div className="flex cart-icon-container">
                    <span> My Account</span>
                    <ShoppingCartIcon />
                </div>
            </div>
        </div>
    )
}
export default AppHeader;