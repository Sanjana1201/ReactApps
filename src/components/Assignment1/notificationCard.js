import Card from "./eachMessage.js";

const eachNotification = ()=>{
    return(
        <div>
            <Card type="Information-card" color="black"/>
            <Card type="Information-card"/>
            <Card type="Success-card" />
            <Card type="Warning-card" />
            <Card type="Error-card" />
        </div>
    )
    
};

export default eachNotification;