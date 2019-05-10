import './App.css';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// ---- Pages
import IpadHome from'./components/ipadHome'
import AppHome from './components/appHome'
import Error404 from './components/error404';




class App extends Component {

  state = {
  }

  componentDidMount() {
      
  }

  componentWillUnmount(){
  }

  render() {
    return (
      <HashRouter>
          <Switch>
              <Route path='/pokedex' exact component={AppHome}/>
              <Route path='/' exact component={IpadHome} />
              <Route component={Error404}/>
            </Switch>
      </HashRouter>
    );
  }
}

export default App;

