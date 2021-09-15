import './App.css';
import Nav from './components/nav';
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/comp1" component={Comp1} exact />
          <Route path="/comp1/?name=anukul2" component={Comp2} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
