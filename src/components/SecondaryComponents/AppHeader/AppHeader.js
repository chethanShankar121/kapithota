import React from "react";
import './AppHeader.scss';
import Navbar from "../Navbar/Navbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const AppHeader = props => {
    return (
        <div id="app-header" className="flex full-width flex-align-center">
            <div className="left-part flex flex-align-center">
                <div className="icon-container"></div>
                <Navbar />
            </div>
            <div className="right-part flex flex-align-center">
                <div className="search-container"></div>
                <div className="my-account-section flex flex-align-center">
                    <div className="my-account">My Account</div>
                    <div className="cart-icon-container">
                        <ShoppingCartIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AppHeader;