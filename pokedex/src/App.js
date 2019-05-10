import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// COMPONENTS
import IpadHome from'./components/DeviceHomeScreen/IpadHome'
import AppHome from './components/AppHome/appHome'
import Error404 from './components/General/error404';
import Footer from './components/General/footer';


//CSS
import './App.css';





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
            <Footer/>
      </HashRouter>
    );
  }
}

export default App;

