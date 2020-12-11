import React from 'react';
import ProjectContainer from '../../Components/ProjectContainer/ProjectContainer';
import './Home.css';


function Home() {
    return (
        <div className='home'>            
            <h1>Recent Projects</h1>
            <ProjectContainer />            
        </div>
    )
}

export default Home;