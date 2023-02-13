import { Component } from "react";
import './historyCard.css';

class HistoryCard extends Component{

    removeHistory = ()=>{
        return this.props.onDelete(this.props.historyId);
    }

    render(){
        const { historyTime, historyLogoUrl, historyTitle, historyDomainUrl} = this.props;
        return(
            <div className="card-container">
                <div className="history-card-time">
                    {historyTime}
                </div>
                <div className="history-card-logo">
                    <img src={historyLogoUrl} alt="site-logo" className="logo"/>
                </div>
                <div className="history-card-details">
                    {historyTitle}
                    <span className="domain">{historyDomainUrl}</span>
                </div>
                <button className="delete-button" onClick={this.removeHistory}>
                    <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png " alt="delete" />
                </button>
            </div>
        )
    }
}

export default HistoryCard;