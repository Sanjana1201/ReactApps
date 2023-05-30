import { useState,useEffect } from "react";


const CustomTimer = () => {

    const [time,setTime] = useState(Number(0));
    const [currStatus,setStatus] = useState(true);

    useEffect(() => {
        const TimerId = setInterval(()=>{
            setTime(currStatus===true?time+1:time);
        },1000)
        return () => clearInterval(TimerId);
    }, [time,currStatus]);

    const handleReset =() =>{
        setTime(Number(0));
        setStatus(true);
    }

    const handleStop =() =>{
        setStatus(false);
    }

    const handleResume =() =>{
        setStatus(true);
    }

    return (
        <div>
            <h1>{time}</h1>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleStop}>Pause</button>
            <button onClick={handleResume}>Resume</button>
        </div>
    );
}

export default CustomTimer;