import { Component } from "react";
import SearchNavbar from '../Navbar/navbar.js';
import SearchHistory from '../HistoryContainer/historyContainer.js';
import './index.css';

class BrowserHistory extends Component{
    state = {currValue : ""};

    renderNewData = (newValue)=>{
        return this.setState({currValue:newValue});
    }
    
    render(){
        return (
        <div>
            <SearchNavbar onNewValue= {this.renderNewData}/>
            <SearchHistory filterValue = {this.state.currValue} onNewSearch = {this.changeValue}/>
        </div>
        )
    }
}

export default BrowserHistory;