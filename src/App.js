import './App.css';
import Users from './Components/Users.js'
import UserDetail from './Components/UserDetail.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        {/* Routes that go to user detail pages*/}
        <Route exact path="/:userId">
          <UserDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
