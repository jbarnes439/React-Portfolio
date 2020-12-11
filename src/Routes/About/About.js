import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about'>
            <h2>A bit about me.</h2>
            <section>
                <p className='write anim-typewriter'>
                    I love live music and the outdoors. A hot cup of coffee on a cold
                    morning in the woods hits different. Watching the blank canvas of
                    a new project in VScode develop into a full fledged website or application 
                    is a pretty amazing feeling. I'm not a huge fan of writing an 'about me', I like 
                    learning from other people's stories. I enjoy being a part of a great team, but 
                    don't mind spending time by myself. I feel blessed with this opportunity
                    we call life and love to stop and take in the views like this one.
                </p>
            </section>            
        </div>
    )
}

export default About;