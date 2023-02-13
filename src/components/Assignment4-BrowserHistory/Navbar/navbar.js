import { Component } from "react";
import './navbar.css';


class HistorySearch extends Component{
    CaptureValue = (e)=>{
        return this.props.onNewValue(e.target.value);
        // console.log(e.target.value);
    }
    render(){
        return (
            <div className="main-container">
                <img src = "https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt = "app logo" className="logo-img"/>
                <div className="search-bar">
                    <img src = "https://assets.ccbp.in/frontend/react-js/search-img.png" alt = "search" className="search-img"/>
                    <input type="text" placeholder="Search history" size="50" onKeyUp={this.CaptureValue}/>
                </div>
            </div>
        )
    }
}

export default HistorySearch;