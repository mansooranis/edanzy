import './App.css';
import HomePage from "./components/HomePage/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/LoginPage/Login';
import SignUp from './SignupPage/SignUp';

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
