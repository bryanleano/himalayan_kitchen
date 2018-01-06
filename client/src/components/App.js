import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import About from './About'
import Menu from './Menu';
import Dish from './Dish';
import MeetTheTeam from './MeetTheTeam';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#741d16", height: "100vh" }}>
        <NavBar />
        <br/>
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/meettheteam' component={MeetTheTeam} />
            <Route exact path='/dishes/:id' component={Dish} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <br />
        <Footer />
      </div>
      
    );
  }
}

export default App;
