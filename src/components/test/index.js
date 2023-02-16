import { Component } from "react";
import Child1 from "./child1.js";
import Child2 from "./child2.js";


class Test extends Component{
    state = ({currState: "State Called"});

    changeState = () => {
        this.setState({currState: "State Changed"});
    }

    render(){
        return (
            <div>
                <Child1 stateChanged = {this.state.currState}/>
                <Child2 />
                <button onClick={this.changeState}/>
            </div>
        )
    }
}

export default Test;