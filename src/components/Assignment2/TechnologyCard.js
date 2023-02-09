import './TechnologyCard.css';

const TechCard = (props)=>{
    const {name, description , imageUrl ,type} = props;
    let applyColor = "black";
    if(type==="DataScientist"){
        applyColor="#ff4f64";
    }
    else if(type==="IOTDeveloper"){
        applyColor="#00a8e7";
    }
    else if(type==="VRDeveloper"){
        applyColor="#44c4a1";
    }
    else if(type==="MLEngineer"){
        applyColor="#fcc200";
    }
    return (
        <div className="cardDiv" style={{borderTop: "5px solid " + applyColor}}>
            <p className="techName">{name}</p>
            <p className="techDescription">{description}</p>
            <img className='techImg' src = {imageUrl} alt="techie-img"/>
        </div>
    )
};

export default TechCard;