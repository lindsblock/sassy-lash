import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Services from './Services';
import Photos from './Photos';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';


class App extends Component {
  render() {
    return (
      <div >
        <NavBar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/services' component={Services}/>
            <Route exact path='/photos' component={Photos}/>
          </Switch>
      </div>
    );
  }
}

export default App;