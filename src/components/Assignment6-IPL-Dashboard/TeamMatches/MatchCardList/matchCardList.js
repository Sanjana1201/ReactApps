import { Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import IPLMatchCard from './IPLMatchCard/iplMatchCard'
import './matchCardList.css'

class MatchList extends Component {
    state = {isLoading: true,currRecentMatches: []};

    componentDidMount() {
        this.getCurrState();
    }

    getCurrState = () => {
        this.setState({isLoading: false,currRecentMatches: this.props.RecentMatches});
    }

    getMatchList = () => {
        return this.state.currRecentMatches.map((match, index) => {
            return <IPLMatchCard matchDetails = {match} key = {index}/>
        })
    }

    render() {
        const {isLoading} = this.state;
        return (
            <div className='matchList-main-container'>
                {isLoading ? (
                <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
                ) : (
                    this.getMatchList()
                )
                }
            </div>
        )
    }
}

export default MatchList;