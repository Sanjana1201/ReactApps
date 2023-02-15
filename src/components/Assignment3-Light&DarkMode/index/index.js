import { Component } from "react";
import './index.css';


class lightDarkContainer extends Component{
    state = {mode : "Light",modeColor: "white"};
    changeMode = ()=>{
        this.setState((prevState) =>{
            if(prevState.mode==="Light"){
                return({mode: "Dark",modeColor: "black"});
            }
            else{
                return({mode : "Light",modeColor: "white"});
            }
        });
    }
    render(){
        console.log(this.state.mode);
        return(
            <div className="lnd-main-container">
                <div style={{backgroundColor: this.state.modeColor}} className="lnd-container">
                    <h2 style={{color: this.state.modeColor==="black"? "white":"black"}}>Click to change mode</h2>
                    <button onClick={this.changeMode}>{this.state.mode} Mode</button>
                </div>
            </div>
        )
    }

}


export default lightDarkContainer;