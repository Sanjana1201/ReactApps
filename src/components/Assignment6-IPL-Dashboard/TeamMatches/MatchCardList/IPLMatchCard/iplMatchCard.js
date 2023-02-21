import {Component} from 'react';
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './iplMatchCard.css'


class IPLMatchCard extends Component {
    state = {isLoading: true,currMatchDetails: []}

    componentDidMount() {
        this.getCardDetails();
    }

    getCardDetails = () => {
        this.setState({isLoading: false,currMatchDetails: this.props.matchDetails});
    }

    getEachCard(){
        const {competing_team_logo,competing_team,result,match_status} = this.state.currMatchDetails;
            return (
                <div className="match-card-body">
                    <img src={competing_team_logo} alt = "competing_team_logo" className='match-card-image'/>
                    <h5 className="match-card-title">{competing_team}</h5>
                    <p className="match-card-text">{result}</p>
                    <p className={match_status==="Won"? ("match-card-text-result-win"):("match-card-text-result-lost") }>{match_status}</p>
                </div>
            )
    }
    render() {
        const {isLoading} = this.state;
        return (
            <>
                {isLoading ? (
                <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
                ) : (
                    this.getEachCard()
                )
                }
            </>
        );
    }
}

export default IPLMatchCard;