import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';
import Icons from './icons.json';


class Header extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        // console.log(Icons);
        // console.log(Icons.flipkart);
        // console.log(Icons['flipkart']);
    }
    toggleNightMode() {
        return;
    }

    render() {
        return (
            <header style={{ backgroundColor: '#2874f0' }}>
                <div className="logo">
                    <img src={Icons.flipkart} alt="flipkart" />
                    <Link to={'/'}>Explore <span className="plus">Plus <img src={Icons['flipkart-logo-last-part']} alt="plus" /></span></Link>
                </div>
                <div className="search-bar">
                    <form id="search" action="#">
                        <input type="text" name="searchbar" placeholder="Search for products, brands and more" />
                        <button type="submit"><i className="bi bi-search"></i></button>
                    </form>
                </div>

                <div className="login-signup">
                    <div className="login-dropdown dropdown">
                        <button className="btn login-button" data-bs-toggle="dropdown">Login</button>
                        <ul className="dropdown-menu dropdown-menu-center">
                            <li><Link to={'/'} className="dropdown-item"><i className="drop-icons bi bi-person-circle"></i>
                                <p className="drop-icon-text">My Profile</p>
                            </Link></li>
                            <li><Link to={'/'} className="dropdown-item"><i className="drop-icons bi bi-plus-lg"></i>
                                <p className="drop-icon-text">Flipkart Plus Zone</p>
                            </Link></li>
                            <li><Link to={'/'} className="dropdown-item"><i className="drop-icons bi bi-box-arrow-in-up"></i>
                                <p className="drop-icon-text">Orders</p>
                            </Link></li>
                            <li><Link to={'/'} className="dropdown-item" href="#"><i className="drop-icons bi bi-suit-heart-fill"></i>
                                <p className="drop-icon-text">Wishlist</p>
                            </Link></li>
                            <li><Link to={'/'} className="dropdown-item" href="#"><i className="drop-icons bi bi-hdd-stack-fill"></i>
                                <p className="drop-icon-text">Rewards</p>
                            </Link></li>
                        </ul>
                    </div>
                    <button className="btn signup-button">Sign-up</button>
                    <button className="btn cart"><i className="bi bi-cart-fill"></i>Cart</button>
                </div>
            </header>
        )
    }
}

export default withRouter(Header);