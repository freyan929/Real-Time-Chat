import './App.css';
import "./components/chat-component/style.css";
import "./components/NavBar/style.css";

import ChatComponent from "./components/chat-component";
import Home from "./components/Home";
import PageHome from './components/PageHome';
import PageB from './components/PageB';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <div className="topnav">
          <nav>
            <ul>
              <li className="navlink">
                <Link to="/">PageHome</Link>
              </li>
              <li className="navlink">
                <Link to="/home">Home</Link>
              </li>
              <li className="navlink">
                <Link to="/chat-component">Chat Component</Link>
              </li>
              <li className="navlink">
                <Link to="/b">Page B</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Switch>
        <Route path="/home">
          <div className="landing-container">
            <Home />
          </div> 
        </Route>
        <Route path="/b">
          <PageB />
        </Route>
        <Route path="/chat-component">
          <div className="parent-container">
            <ChatComponent />
          </div>
        </Route>
        <Route path="/">
          <div>
            <PageHome />
          </div> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
