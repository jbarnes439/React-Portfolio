import React from 'react';
import Screenshot from '../../images/otaku-views.png';
import './Spanglish.css';

function Spanglish() {
    
    return (
        <div className='project-card'>
            <a href='https://Otaku-risuto.vercel.app/'><h4>Otaku Risuto</h4></a>
            <img src={Screenshot} alt='screenshot of the Spanglish app.'/>
            <p>
                Always wanted to hablas espanol? Well, this app will have you speaking
                spanglish in no time! I haven't had the time to make it a Rosetta Stone
                yet, but I did learn a bit about algorithms in the process. In case you were
                wondering, the F in algorithms stands for fun! Jokes aside, I did learn a lot
                making this particular app. Most notably, algorithms are not easy to write, but
                neither are they impossible to figure out.
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

export default Spanglish;