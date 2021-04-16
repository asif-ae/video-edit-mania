import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import Customar from './components/Panel/Customar/Customar/Customar';
import NotFound from './components/NotFound/NotFound';
import Admin from './components/Panel/Admin/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          {/* Customar Routes */}
          <Route path="/panel/customar/:customarDynamic">
            <Customar></Customar>
          </Route>
          {/* Customar Routes */}

          {/* Admin Routes */}
          <Route path="/panel/admin/:adminDynamic">
            <Admin></Admin>
          </Route>
          {/* Customar Routes */}

          {/* Not Found Route(s) */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          {/* Not Found Route(s) */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
