import { Component} from 'react'
import IPLTeamCardComponent from './IPLTeams/IPLTeams.js';
import './IPLDashboardTeamList.css'

class TeamList extends Component {
    state = {teamsData: []}
    componentDidMount() {
        this.renderTeams();
    }

    renderTeams = async() =>{
        const response = await fetch('https://apis.ccbp.in/ipl');
        const data = await response.json();
        this.setState({teamsData: data.teams});
    }
    render() {
        const IplTeamsData = this.state.teamsData;
        const IplTeams = IplTeamsData.map((teams) => {
            return <IPLTeamCardComponent key={teams.id} team={teams} />
        })
        return (
            <div className='dashboard-team-list-container'>
                {IplTeams}
            </div>
        )
    }
}

export default TeamList