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

function App() {
  return (
    <Router>
      <Switch>
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
