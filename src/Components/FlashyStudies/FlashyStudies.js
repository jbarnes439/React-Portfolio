import React from 'react';
import expressIcon from '../../images/express-icon.png';
import Screenshot from '../../images/flashy-studies-views.png';

function FlashyStudies() {

    return (
        <div className='project-card'>
            <a
                href='https://flashy-studies.vercel.app/'
                rel='noopener noreferrer'
                target='_blank'>
                <h3>FlashyStudies</h3>
            </a>
            <h4>Screenshots:</h4>
            <img className='screenshots' src={Screenshot} alt='screenshot of the Flashy-Studies app.' />
            <p>
                FlashyStudies is an app that allows users to create and take their
                flashcards with them. Study like it's the twenty-first century - with
                your smartphone, not a stack of cards.
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
                    action='https://flashy-studies.vercel.app/'
                    rel='noopener noreferrer'
                    target='_blank'>
                    <button className='button-link'>Live</button>
                </form>
                <form
                    action='https://github.com/jbarnes439/capstone-1-Flashy-Studies-Client.git'
                    rel='noopener noreferrer'
                    target='_blank'>
                    <button className='button-link'>Code</button>
                </form>
            </section>
        </div>
    )
}

export default FlashyStudies;