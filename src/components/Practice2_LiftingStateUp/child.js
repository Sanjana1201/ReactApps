import { Component } from "react";
import NewColor from "./innerChild.js"

class SendColor extends Component{
    state={content : "white"}
    changeText = (currText)=>{
        this.setState({content: currText});
        return this.props.onbtnClick(this.props.giveColor);
    }
    render(){
        const currColor = this.props.giveColor;
        return(
            <div>
                <h1>{this.state.content}</h1>
                <NewColor passColor={currColor} onClicking = {this.changeText}/>
            </div>
        )
    }
}

export default SendColor;

