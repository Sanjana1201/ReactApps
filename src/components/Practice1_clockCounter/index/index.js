import { Component } from "react";

class counterCard extends Component{
    state = {count:0};
    onIncrement = ()=>{
        this.setState((prevState) => ({count: prevState.count+1}))
    }
    render(){
        return (
        <div style={{maxWidth: "600px",margin: "auto"}}>
            <h1>The button has been clicked {this.state.count} times</h1>
            <button onClick={this.onIncrement}>ClickMe</button>
        </div>
        );
    }
}

export default counterCard;