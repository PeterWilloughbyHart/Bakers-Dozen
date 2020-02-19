import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <nav>
            <img id="logo" alt="cupcake" src="https://img.icons8.com/cotton/64/000000/cupcake.png"/>
            <h1>Baker's Dozen</h1>
            <ul>
                <Link to="/Feed"><li>Feed</li></Link>
                <li>Profile</li>
                <li>Settings</li>
                <li>Contact</li>
                <Link to="/"><li>Signout</li></Link>
            </ul>
        </nav>
    )
}

export default Navigation;