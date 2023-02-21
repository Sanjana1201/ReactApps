import {useState} from 'react'
import {StyledDiv} from './styledComponent.js'



const Test = () => {
    const [mode,setMode] = useState('lock');

    const changeMode = () =>{
        setMode(mode === 'lock'? 'unlock' : 'lock');
    }

    const changeImage = () =>{
        const currUrl = mode === 'lock' ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png':"https://assets.ccbp.in/frontend/hooks/unlock-img.png";
        console.log(currUrl);
        return currUrl;
    }

    const changeText = () =>{
        const currText = mode === 'lock'? 'Your device is Unlocked':'Your device is Locked';
        return currText;
    }

    return (
        <div>
            <StyledDiv >
                <img src={changeImage()} alt = {mode}/>
                <h1>{changeText()}</h1>
                <button onClick={changeMode}>changeMode</button>
            </StyledDiv>
        </div>
    )
}

export default Test;