import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>            
            <a 
                href='https://www.linkedin.com/in/josh-barnes-developer/'
                rel='noopener noreferrer' 
                target='_blank'>
                <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt='linkedin icon'/>
            </a>
            <a 
                href='mailto:jbarnes439@gmail.com?subject=Loved your portfolio!'
                className='email-link'>
                Email: jbarnes439@gmail.com
            </a>
            <a 
                href='https://github.com/jbarnes439' 
                rel='noopener noreferrer' 
                target='_blank'>
                <img src='https://img.icons8.com/fluent/48/000000/github.png' alt='github icon'/>
            </a>
        </div>
    )
}

export default Footer;