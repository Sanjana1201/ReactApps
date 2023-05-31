import { HashRouter, Route,Switch} from "react-router-dom";

import IplDashboard from "./components/Assignment6-IPL-Dashboard/index";
import IPLTeamMatches from "./components/Assignment6-IPL-Dashboard/TeamMatches/teamMatches.js";
import NotFoundPage from './components/Assignment6-IPL-Dashboard/NotFound/NotFound.js'

import NotificationSection from './components/Assignment1';
import TechnologySection from './components/Assignment2';
import ClickCounter from './components/Practice1_clockCounter/index';
import LightDarkMode from './components/Assignment3-Light&DarkMode/index';
import LiftingStateUp from './components/Practice2_LiftingStateUp'
import BrowserHistory from './components/Assignment4-BrowserHistory/index';
import PasswordManager from './components/Assignment5-PasswordManager/index';
import HomePage from './components/Home/index.js';
import TrafficLight from './components/Assignment9-TrafficLight/index/index';
import HooksTimerApp from './components/Assignment8-HooksTimer/index';
import TodoList from './components/Assignment7-todoList/index';


const App = () => {
  return(
    <HashRouter>
    <Switch>
    <Route exact path = "/" component ={HomePage}/>
      <Route exact path = "/path1" component={NotificationSection}/>
      <Route exact path = "/path2" component ={TechnologySection} />
      <Route exact path = "/path3" component ={ClickCounter} />
      <Route exact path = "/path4" component ={LightDarkMode} />
      <Route exact path = "/path5" component ={LiftingStateUp} />
      <Route exact path = "/path6" component ={BrowserHistory} />
      <Route exact path = "/path7" component ={PasswordManager} />
      <Route exact path = "/path8" component ={IplDashboard}/>
      <Route exact path = "/path8/team-matches/:id" component ={IPLTeamMatches}/>
      <Route exact path = "/path9" component ={TodoList} />
      <Route exact path = "/path10" component={TrafficLight} />
      <Route exact path = "/path11" component={HooksTimerApp} />
      <Route path='*' component={NotFoundPage} />
      </Switch>
    </HashRouter>
  )
}

export default App;
