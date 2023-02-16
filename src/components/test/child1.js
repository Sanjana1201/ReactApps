import { Component } from "react";

class Child1 extends Component{
    render(){
        return (
            <div>
            {this.props.stateChanged}
                Child1 was called;
            </div>
        )
    }
}

export default Child1;