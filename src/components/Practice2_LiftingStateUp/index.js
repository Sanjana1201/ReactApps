import { Component } from "react";
import ColorChangingChild from './child.js';

class LiftedColor extends Component{
    state = {color:"white"};
    changeColor = (currColor)=>{
        // console.log(currColor);
        this.setState({color : currColor});
    }

    render(){
        return (
            <div style = {{width: "300px", height: "300px",backgroundColor: this.state.color}}>
               <ColorChangingChild giveColor="red" onbtnClick={this.changeColor}/>
               <ColorChangingChild giveColor="green" onbtnClick={this.changeColor}/>
            </div>
        )
    }
}

export default LiftedColor;
