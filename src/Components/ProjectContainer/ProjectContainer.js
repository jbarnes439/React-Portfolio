import React from 'react';
import FlashyStudies from '../../Components/FlashyStudies/FlashyStudies';
import OtakuRisuto from '../../Components/OtakuRisuto/OtakuRisuto';

function ProjectContainer() {
    return (
        <div className='project-container'>
            <OtakuRisuto />            
            <FlashyStudies />
        </div>
    )
}

export default ProjectContainer;