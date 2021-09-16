import './App.css';
import Nav from './components/nav';
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <SearchInput />
        <Switch>
          <Route path="/comp1" component={Comp1} exact />
          <Route path="/comp2/:id" component={Comp2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
