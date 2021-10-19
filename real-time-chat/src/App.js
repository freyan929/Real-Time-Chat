import './App.css';

import PageA from './components/PageA';
import PageB from './components/PageB';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/a">Page A</Link>
            </li>
            <li>
              <Link to="/b">Page B</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/a">
          <PageA />
        </Route>
        <Route path="/b">
          <PageB />
        </Route>
        <Route path="/">
          <PageA />
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
