import { Component } from 'react';
import './IPLDashboardHeading.css'


class IPLHeading extends Component {
    render() {
        return (
            <div className="ipl-heading">
                <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"  alt = "ipl logo" className='ipl-logo'/>
                <h1>IPL dashboard</h1>
            </div>
        );
    }
}

export default IPLHeading;