import { Component } from "react";
import InnerChild from './innerChild';
import { Button1Css } from "../styledComponent";

class Child1 extends Component{
    render(){
        return (
            <div>
                <InnerChild buttonCSS={Button1Css}/>
            </div>
        )
    }
}

export default Child1;