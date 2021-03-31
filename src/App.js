import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Classes from './classVideos/classes'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Math8 from './classVideos/class8/math/math8'
import Science8 from './classVideos/class8/science/science8'
import Hindi8 from './classVideos/class8/hindi/hindi8'
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/"><Hero/></Route>
          <Route path="/classes"><Classes/></Route>
          <Route path="/class8/math"><Math8/></Route>
          <Route path="/class8/science"><Science8/></Route>
          <Route path="/class8/hindi"><Hindi8/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
