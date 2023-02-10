import { Component } from "react";

class SendColorText extends Component{
    changeColor=()=>{
        return this.props.onClicking(this.props.passColor);
    }
    render(){
        return (
            <div style={{width: "50px",height: "50px"}}>
                <button onClick={this.changeColor}>Change to {this.props.passColor}</button>
            </div>
        )
    }
}

export default SendColorText;