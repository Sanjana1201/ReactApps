import LearnTechnolgiesHeading from './TechnologyHeading.js';
import LearnTechnolgiesContent from './TechnologyContent.js';
import LearnTechnolgiesCards from './TechnologyCardList.js';
import './index.css';

const LearnTechnology = ()=>{
    return(
        <div className='learnTechnologyOuterDiv'>
            <div className='learnTechnologyDiv'>
            <LearnTechnolgiesHeading />
            <LearnTechnolgiesContent />
            <LearnTechnolgiesCards />
            </div>
        </div>
    )
};

export default LearnTechnology;