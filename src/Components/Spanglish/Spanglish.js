import React from 'react';
import Screenshot from '../../images/spanglish-views.png';
import expressIcon from '../../images/express-icon.png';

function Spanglish() {

    return (
        <div className='project-card'>
            <a href='https://spanglish.vercel.app/'
                rel='noopener noreferrer'
                target='_blank'>
                <h3>Spanglish</h3>
            </a>
            <h4>Screenshots:</h4>
            <img className='screenshots' src={Screenshot} alt='screenshot of the Spanglish app.' />
            <p>
                Always wanted to hablar espanol? Well, this app will have you speaking
                Spanglish in no time! I haven't had the time to make it a Rosetta Stone,
                yet, but I did learn a bit about algorithms in the process. In case you
                were wondering, the F in algorithms stands for fun! Jokes aside, I did
                learn a lot from making this particular app. Most notably, algorithms are 
                not easy to write, but neither are they impossible to figure out. Also, my
                first time using the Cypress framework for testing.
            </p>
            <h4>Technologies:</h4>
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
                    src={expressIcon}
                    alt='ExpressJS icon'
                />
                <img
                    className='tech-image'
                    src="https://img.icons8.com/plasticine/100/000000/react.png"
                    alt='react icon'
                />
            </section>
            <section className='link-buttons'>
                <form
                    action='https://spanglish.vercel.app/'
                    rel='noopener noreferrer'
                    target='_blank'>
                    <button className='button-link'>Live</button>
                </form>
                <form
                    action='https://github.com/jbarnes439/spaced-repetition.git'
                    rel='noopener noreferrer'
                    target='_blank'>
                    <button className='button-link'>Code</button>
                </form>
            </section>
        </div>
    )
}

export default Spanglish;