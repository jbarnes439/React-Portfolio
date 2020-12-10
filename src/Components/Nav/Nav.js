import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <div className='nav'>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/About'}>About</Link></li>
                <li><Link to={'/Contact'}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Nav;