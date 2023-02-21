import { Component} from 'react'
import {Link} from 'react-router-dom'

import './IPLTeams.css';

class IPLTeam extends Component{
    render(){
        // console.log(this.props);
        const {team} = this.props;
        const {name,team_image_url,id} = team;
        return(
            <Link to={`/path8/team-matches/${id}`} className="team-card-link">
            <div className='team-card-container'>
            <img src={team_image_url} alt="team-img" className='team-img'/>
                <div className='team-name-container'>
                    <h3 className='team-name'>{name}</h3>
                </div>
            </div>
            </Link>
        )
    }
}

export default IPLTeam;