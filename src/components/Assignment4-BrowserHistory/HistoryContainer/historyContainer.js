import { Component } from 'react';
import './historyContainer.css';
import HistoryData from "../data.js";
import SearchHistoryCard from "./historyCard/historyCard.js";
import "./historyContainer.css";

class SearchResults extends Component{
    state = {currFilterValue : HistoryData};
    removeItem = (currItem) =>{
        console.log(currItem);
        this.setState((prevState)=>{
            const newList = prevState.currFilterValue.filter((eachItem)=>{
                if(eachItem.id===currItem){
                    return false;
                }
                return true;
            });
            return ({currFilterValue: newList});
        });
    }
    render(){
        const newFilterValue = (this.props.filterValue).toLowerCase();
        const testData = this.state.currFilterValue.reduce((acc,currValue)=>{
            const currTitle = (currValue.title).toLowerCase();
            const currDomainUrl = (currValue.domainUrl).toLowerCase();
            if(currTitle.includes(newFilterValue)===true || currDomainUrl.includes(newFilterValue)===true){
                const { id,timeAccessed,logoUrl,title,domainUrl} = currValue;
                return [...acc,<SearchHistoryCard historyId ={id} historyTime = {timeAccessed} historyLogoUrl ={logoUrl} historyTitle={title} historyDomainUrl={domainUrl} onDelete={this.removeItem}/>];
            }
            return acc;
        },[]);

        // const newData = HistoryData.filter((eachData)=>{
        //     if(eachData.title.includes(newFilterValue)===true){
        //         return true;
        //     }
        //     return false;
        // });
        // const filteredComponents = newData.map((eachData)=>{
        //     const { id,timeAccessed,logoUrl,title,domainUrl} = eachData;
        //     return <SearchHistoryCard historyId ={id} historyTime = {timeAccessed} historyLogoUrl ={logoUrl} historyTitle={title} historyDomainUrl={domainUrl} />
        // });
        return(
            <div className='container'>
                {/* {newFilterValue} */}
                {/* {filteredComponents} */}
                {testData.length===0? <div className='no-history'>There is no history to show</div>:<div className='history-cars-container'>{testData}</div>}
            </div>
        )
    }
}

export default SearchResults;