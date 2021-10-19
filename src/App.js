import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';

import Services from './components/Services/Services';
import Signin from './components/Signin/Signin';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/signin">
              <Header></Header>
              <Signin></Signin>
              <Footer></Footer>
            </Route>
            <Route path="/services">
              <Header></Header>
              <Services></Services>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <Header></Header>
              <ServiceDetail> </ServiceDetail>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
