import './App.css';
import Users from './Components/Users.js'
import UserDetail from './Components/UserDetail.js'
import { Switch, Route, } from "react-router-dom";

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
