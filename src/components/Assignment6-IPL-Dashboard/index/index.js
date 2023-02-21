import { Component } from "react";
import DashboardHeading from "../IPLDashboardHeading/IPLDashboardHeading.js"
import DashboardTeams from "../IPLDashboardTeamList/IPLDashboardTeamList.js"
import './index.css'

class IplDashboard extends Component {
    render(){
        return (
            <div className="ipl-main-container">
                <DashboardHeading />
                <DashboardTeams />
            </div>
        )
    }
}

export default IplDashboard;
