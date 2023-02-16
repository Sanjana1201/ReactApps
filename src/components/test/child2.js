import { Component } from "react";

class Child2 extends Component{
    render(){
        const temp = "again called"
        return (
            <div>
                {temp}
                Child2 was called;
            </div>
        )
    }
}

export default Child2;