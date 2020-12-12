import React from 'react';
import ProjectContainer from '../../Components/ProjectContainer/ProjectContainer';
import './Home.css';


function Home() {
    return (
        <div className='home'>            
            <h2>Recent Projects</h2>
            <ProjectContainer />            
        </div>
    )
}

export default Home;