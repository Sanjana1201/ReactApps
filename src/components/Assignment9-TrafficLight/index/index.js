import {useState,useEffect} from 'react'
import {TrafficLightContainer,Light} from './styledComponents'

const TrafficLight = () =>{
    const [trafficLight,setTrafficLight] = useState("red");

    useEffect(()=>{
        const myTrafficLight = setInterval(() =>{
            setTrafficLight((prevState)=>{
                if(prevState==="red"){
                    return "yellow";
                }
                else if(prevState==="yellow"){
                    return "green";
                }
                else{
                    return "red";
                }
            })
        },5000);
        return () => clearInterval(myTrafficLight);
    },[trafficLight])

    return(
        <div>
            <h1>Traffic Light</h1>
            <h2>Traffic Light: {trafficLight}</h2>
            <TrafficLightContainer>
                <Light myColor={trafficLight==='red'? "red":"white"}/>
                <Light myColor={trafficLight==='yellow'? "yellow":"white"}/>
                <Light myColor={trafficLight==='green'? "green":"white"}/>
            </TrafficLightContainer>
        </div>
    )
}

export default TrafficLight;