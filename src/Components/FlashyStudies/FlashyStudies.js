import React from 'react';
import './FlashyStudies.css';
import Screenshot from '../../images/flashy-studies-views.png';

function FlashyStudies() {
    
    return (
        <div className='project-card'>
            <a href='https://flashy-studies.vercel.app/'><h4>FlashyStudies</h4></a>
            <img src={Screenshot} alt='screenshot of the Flashy-Studies app.'/>
            <p>
                FlashyStudies is an app that allows users to create and take their
                flash cards with them. Study like it's the twenty-first century - with
                your smartphone, not a stack of cards.
            </p>
            <h5>Technologies:</h5>
            <section className='tech'>                 
                <img 
                    className='tech-image' 
                    src="https://img.icons8.com/color/48/000000/postgreesql.png" 
                    alt='PostgreSQL logo'
                />
                <img 
                    className='tech-image' 
                    src="https://img.icons8.com/color/48/000000/nodejs.png" 
                    alt='node-js icon'
                />
                <img 
                    className='tech-image' 
                    src="https://img.icons8.com/plasticine/100/000000/react.png"
                    alt='react icon'
                />
            </section>
        </div>
    )
}

export default FlashyStudies;