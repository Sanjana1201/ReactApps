import './eachMessage.css';

const card = (props)=>{
    const { type } = props;
    let image,message,color = props.color;
    if(type==="Information-card"){
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png";
        message="Information Message";
        color = color? color: "#0b69ff";
    }
    else if(type==="Success-card"){
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png";
        message="Success Message";
        if(color===undefined){
            color="#2dca73";
        }
    }
    else if(type==="Warning-card"){
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png";
        message="Warning Message";
        if(color===undefined){
            color="#ffb800";
        }
    }
    else if(type==="Error-card"){
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png";
        message="Error Message";
        if(color===undefined){
            color="#ff0b37";
        }
    }
    return (
        <div className="Message-div" style={{backgroundColor: color}}>
            <img src = {image} alt="icon" className='msg-symbol'   />
            <p>{message}</p>
        </div>
    );
};

export default card;