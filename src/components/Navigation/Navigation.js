import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <nav id="navigation">
            <img id="logo" alt="cupcake" src="https://img.icons8.com/cotton/64/000000/cupcake.png"/>
            <h1>Baker's Dozen</h1>
            <img id="hamburger" src="https://img.icons8.com/ios-glyphs/32/000000/menu.png" alt="hamburger menu"></img>
            <ul>
                <Link to="/Feed"><li>Feed</li></Link>
                <Link to="/Profile"><li>Profile</li></Link>
                <Link to="/Settings"><li>Settings</li></Link>
                <Link to="/Contact"><li>Contact</li></Link>
                <Link to="/"><li>Signout</li></Link>
            </ul>
        </nav>
    )
}

export default Navigation;