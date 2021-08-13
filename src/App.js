import './App.css';
import HomePage from "./components/HomePage/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/SignupPage/SignUp'
import SignUp from './components/SignupPage/SignUp';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
