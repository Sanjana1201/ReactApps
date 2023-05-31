import { Component} from 'react';
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './latestMatch.css';


class LatestMatch extends Component {
    state = {isLoading: true,currLatestMatch: ""};

    componentDidMount() {
        this.getLatestMatch();
    }

    getLatestMatch = () =>{
        this.setState({isLoading: false,currLatestMatch: this.props.latestMatchDetails});
    }

    getLatestMatchDetails = () => {
        const {currLatestMatch} = this.state;
        const {competing_team, date, venue,result,competing_team_logo,first_innings,second_innings,man_of_the_match, umpires} = currLatestMatch;
        return (
            <div className='latest-match-container'>
                <div className='latest-match-details1'>
                <div>
                    <h1>{competing_team}</h1>
                    <p>{date}</p>
                    <p>{venue}</p>
                    <p>{result}</p>
                </div>
                    <div className='latest-match-details2'>
                        <img src={competing_team_logo} alt = "competing_team_logo" className='latest-match-img'/>
                    </div>
                </div>
                <div className='latest-match-details3'>
                    <p className='latest-match-details-heading'>First Innings</p>
                    <p>{first_innings}</p>
                    <p className='latest-match-details-heading'>Second innings</p>
                    <p>{second_innings}</p>
                    <p className='latest-match-details-heading'>Man of the match</p>
                    <p>{man_of_the_match}</p>
                    <p className='latest-match-details-heading'>Umpires</p>
                    <p>{umpires}</p>
                </div>
            </div>
        )
    }

    render() {
        const { isLoading } = this.state;
        return (
            <div className='latest-match-main-container'>
                {isLoading ? (
                    <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
                    ) : (
                        this.getLatestMatchDetails()
                    )
                }
            </div>
        );
    }
}

export default LatestMatch;