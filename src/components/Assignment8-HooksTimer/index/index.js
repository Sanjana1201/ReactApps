import {useState} from 'react'
import MyTimer from '../MyTimer/index.js'

const Timer = () =>{

    const [isStart,setTimer] = useState(false)

    const handleTimer = () =>{
        setTimer(!isStart);
    }

    return(
        <div>
            <h1>Timer</h1>
            <button onClick={handleTimer}>{isStart===false? "Show Timer": "Hide Timer"}</button>
            {isStart && <MyTimer/>}
        </div>
    )
}

export default Timer;