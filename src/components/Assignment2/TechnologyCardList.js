import TechnologiesCardData from './data.js';
import TechnologyCard from './TechnologyCard.js';
import './TechnologyCardList.css';

const TechnologyList = ()=>{
    const cardList = TechnologiesCardData.map((eachData)=>{
        const {TechnologyId,TechnologyName,TechnologyDescription,TechnologyImageUrl,TechnologyType} = eachData;
        return <TechnologyCard key = {TechnologyId} type={TechnologyType} name= {TechnologyName} description = {TechnologyDescription} imageUrl ={TechnologyImageUrl}/>
    });
    return <div className="cardContainer">{cardList}</div>;
}

export default TechnologyList;