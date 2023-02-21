import { Component} from 'react'
import {Redirect} from'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import NotFoundPage from '../NotFound/NotFound.js'
import TeamLatestMatches from './LatestMatch/latestMatch.js'
import RecentMatches from './MatchCardList/matchCardList.js'
import './teamMatches.css'


const colorMatching = {
    "RCB": "#a4261d",
    "KKR": "#5755a7",
    "CSK": "#f7db00",
    "KXP": "#d91c1f",
    "RR" : "#da237b",
    "MI" : "#13418b",
    "SH" : "#f26d22",
    "DC" : "#4f5db0"
}


class TeamMatches extends Component {
    state = ({isLoading : true,currTeamData: {},currObjectFound: false});
    componentDidMount() {
        this.getTeamsData();
    }
    getTeamsData = async() => {
        const id = this.props.match.params.id;
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`);
        const data = await response.json();
        if(data.error_message!=='Please Select Valid Team'){
            this.setState({isLoading: false,currTeamData: data,currObjectFound: true});  
        }
        else{
            this.setState({isLoading: false,currTeamData: data,currObjectFound: false});    
        }
    }

    getDetails = () => {
        if(this.state.currObjectFound===false){
            return <Redirect to = {{to : NotFoundPage}} />
        }
        const {currTeamData} = this.state;
        const {team_banner_url, latest_match_details, recent_matches} = currTeamData;
        const currId = this.props.match.params.id;
        return (
            <div className="team-matches-container" style={{backgroundColor: colorMatching[currId]}}>
                <img src = {team_banner_url} alt = "team banner url" className='banner-img'/>
                <TeamLatestMatches latestMatchDetails = {latest_match_details}/>
                <RecentMatches RecentMatches = {recent_matches}/>
            </div>
        )
    }

    render() {
        const { isLoading } = this.state;
        return (
            <div>
            {isLoading ? (
                <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
                ) : (
                    this.getDetails()
                )
            }
            </div>
        )
    }
}

export default TeamMatches;
