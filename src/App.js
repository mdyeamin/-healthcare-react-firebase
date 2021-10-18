import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import Services from './components/Services/Services';
import Signin from './components/Signin/Signin';

function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/signin">
            <Signin></Signin>
          </Route>
          <Route>
            <Services></Services>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
