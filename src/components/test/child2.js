import { Component } from "react";
import InnerChild from './innerChild';
import { Button2Css } from "./styledComponent";

class Child2 extends Component{
    render(){
        return (
            <div>
                <InnerChild buttonCSS = {Button2Css}/>
            </div>
        )
    }
}

export default Child2;