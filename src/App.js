import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Math8 from './classVideos/class8/math8'
import Science8 from './classVideos/class8/science8'
import Hindi8 from './classVideos/class8/hindi8'
import Math9 from './classVideos/class9/math9'
import Chemistry9 from './classVideos/class9/chemistry9'
import Physics9 from './classVideos/class9/physics9'
import Biology9 from './classVideos/class9/biology9'
import History9 from './classVideos/class9/history9'
import Geography9 from './classVideos/class9/geography9'
import Political9 from './classVideos/class9/political9'
import Ecomomics9 from './classVideos/class9/ecomomics9'
import Hindi9 from './classVideos/class9/hindi9'
import Math10 from './classVideos/class10/math10'
import Chemistry10 from './classVideos/class10/chemistry10'
import Physics10 from './classVideos/class10/physics10'
import Biology10 from './classVideos/class10/biology10'
import History10 from './classVideos/class10/history10'
import Geography10 from './classVideos/class10/geography10'
import Political10 from './classVideos/class10/political10'
import Ecomomics10 from './classVideos/class10/ecomomics10'
import Hindi10 from './classVideos/class10/hindi10'
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/"><Hero/></Route>
          <Route path="/class8/math"><Math8/></Route>
          <Route path="/class8/science"><Science8/></Route>
          <Route path="/class8/hindi"><Hindi8/></Route>
          <Route path="/class9/math"><Math9/></Route>
          <Route path="/class9/chemistry"><Chemistry9/></Route>
          <Route path="/class9/physics"><Physics9/></Route>
          <Route path="/class9/biology"><Biology9/></Route>
          <Route path="/class9/history"><History9/></Route>
          <Route path="/class9/political"><Political9/></Route>
          <Route path="/class9/geography"><Geography9/></Route>
          <Route path="/class9/ecomomics"><Ecomomics9/></Route>
          <Route path="/class9/hindi"><Hindi9/></Route>
          <Route path="/class10/chemistry"><Chemistry10/></Route>
          <Route path="/class10/physics"><Physics10/></Route>
          <Route path="/class10/biology"><Biology10/></Route>
          <Route path="/class10/history"><History10/></Route>
          <Route path="/class10/political"><Political10/></Route>
          <Route path="/class10/geography"><Geography10/></Route>
          <Route path="/class10/ecomomics"><Ecomomics10/></Route>
          <Route path="/class10/hindi"><Hindi10/></Route>
          <Route path="/class10/math"><Math10/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
