import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import List from './List'
import UseEffects from './UseEffects'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouteParameters from './RouteParameters';
import ControlledInputForms from './ControlledInputForms';
import NotFound from './NotFound';

function App() {



  return (
    <Router>
      <div className="App">

      <Navbar />

      <div className="content">
        <Switch>

          <Route exact path="/">
          <Home />
          </Route>

          <Route path="/list">
          <List />
          </Route>

          <Route path="/use-effect">
          <UseEffects />
          </Route>

          <Route path="/route-parameters/:id">
          <RouteParameters />
          </Route>

          <Route path="/input-form">
          <ControlledInputForms />
          </Route>

          <Route path="*" >
            <NotFound />
          </Route>
        </Switch>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
