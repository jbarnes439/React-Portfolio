import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css'

function Header() {
    return (
        <div className='Header'>
            <h2>Josh Barnes: <span>Full-Stack Developer</span></h2>
            <Nav />
        </div>
    )
}

export default Header;