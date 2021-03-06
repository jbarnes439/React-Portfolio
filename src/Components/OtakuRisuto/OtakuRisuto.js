import React from 'react';
import Screenshot from '../../images/otaku-views.png';
import expressIcon from '../../images/express-icon.png';


function OtakuRisuto() {

    return (
        <div className='project-card'>
            <a
                href='https://Otaku-risuto.vercel.app/'
                rel='noopener noreferrer'
                target='_blank'>
                <h3>Otaku Risuto</h3>
            </a>
            <h4>Screenshots:</h4>
            <img className='screenshots' src={Screenshot} alt='screenshot of the Otaku Risuto app.' />
            <p>
                Otaku Risuto is an app that allows a user to keep track of their favorite anime titles.
                Users can search for and create lists of anime, complete with images and descriptions.
                Edit and delete lists at will, as well as commenting on and rating other user's lists.
                Struggling to decide what to watch? Allow us to pick from your list for you with our
                anime roulette button.
            </p>
            <h4>Technologies:</h4>
            <section className='tech'>
                <img
                    className='tech-image'
                    src='https://img.icons8.com/color/48/000000/postgreesql.png'
                    alt='PostgreSQL logo'
                />
                <img
                    className='tech-image'
                    src='https://img.icons8.com/color/48/000000/nodejs.png'
                    alt='node-js icon'
                />
                <img
                    className='tech-image'
                    src={expressIcon}
                    alt='ExpressJS icon'
                />
                <img
                    className='tech-image'
                    src='https://img.icons8.com/plasticine/100/000000/react.png'
                    alt='react icon'
                />
            </section>
            <section className='link-buttons'>
                <form                    
                    action='https://Otaku-risuto.vercel.app/'
                    rel='noopener noreferrer'
                    target='_blank'>
                        <button className='button-link'>Live</button>                    
                </form>
                <form
                    action='https://github.com/Cap3-Nate-Chad-Brandon-Michael-Josh/OtakuRisuto.git'
                    rel='noopener noreferrer'
                    target='_blank'>
                        <button className='button-link'>Code</button>
                </form>
            </section>
        </div>
    )
}

export default OtakuRisuto;