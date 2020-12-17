import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    const [menuActive, setMenuState] = useState(false);


    return (
        <div className='navbar'>
            <header className='header'>
                <h1>Josh Barnes: <span>Full-Stack Developer</span></h1>
            </header>            
            <nav>
                <div className='toggle-button' onClick={() => setMenuState(!menuActive)}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                <div className={`navbar-links ${menuActive ? 'active' : ''}`}>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/About'}>About</Link></li>
                        <li><Link to={'/Contact'}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;