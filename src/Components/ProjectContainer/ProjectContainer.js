import React from 'react';
import FlashyStudies from '../../Components/FlashyStudies/FlashyStudies';
import OtakuRisuto from '../../Components/OtakuRisuto/OtakuRisuto';
import Spanglish from '../../Components/Spanglish/Spanglish';

function ProjectContainer() {
    return (
        <div className='project-container'>
            <OtakuRisuto />
            <Spanglish />            
            <FlashyStudies />
        </div>
    )
}

export default ProjectContainer;