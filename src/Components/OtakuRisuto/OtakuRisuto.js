import React from 'react';
import './FlashyStudies.css';
import Screenshot from '../../images/flashy-screenshot.png';

function FlashyStudies() {
    
    return (
        <div className='project-card'>
            <a href='https://Otaku-risuto.vercel.app/'><h4>Otaku Risuto</h4></a>
            <img src={Screenshot} alt='screenshot of the Flashy-Studies app.'/>
            <p>
                Otaku Risuto is an app that allows a user to keep track of their favorite
                anime titles. Users are able search for and create lists of anime, complete with 
                images and descriptions. Edit and delete lists at will, as well as commenting on and rating 
                other user's lists. Struggling to decide what to watch? Allow us to pick from your list
                for you with our anime roulette button.
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