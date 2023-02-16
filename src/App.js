import { HashRouter, Route,Switch} from "react-router-dom";

import NotificationSection from './components/Assignment1';
import TechnologySection from './components/Assignment2';
import ClickCounter from './components/Practice1_clockCounter/index';
import LightDarkMode from './components/Assignment3-Light&DarkMode/index';
import LiftingStateUp from './components/Practice2_LiftingStateUp'
import BrowserHistory from './components/Assignment4-BrowserHistory/index';
import PasswordManager from './components/Assignment5-PasswordManager/index';
import HomePage from './components/Home/index.js';


const App = () => {
  return(
    <HashRouter>
    <HomePage />
    <Switch>
      <Route exact path = "/path1" component={NotificationSection}/>
      <Route exact path = "/path2" component ={TechnologySection} />
      <Route exact path = "/path3" component ={ClickCounter} />
      <Route exact path = "/path4" component ={LightDarkMode} />
      <Route exact path = "/path5" component ={LiftingStateUp} />
      <Route exact path = "/path6" component ={BrowserHistory} />
      <Route exact path = "/path7" component ={PasswordManager} />
        {/* <NotificationSection />
        <TechnologySection />
        <ClickCounter />
        <LightDarkMode />
        <LiftingStateUp />
        <BrowserHistory />
        <PasswordManager /> */}
        </Switch>
    </HashRouter>
  )
}

export default App;
