import React from 'react';
import './App.css';
import HeaderComponent from './shared/header/header';
import HomeComponent from './shared/pages/home/home';
import FooterComponent from './shared/footer/footer';

import PlaceDetail from './shared/component-template/Places/placedetail';
import ExperienceDetail from './shared/component-template/experiences/experiencedetail';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <Router>
        <Switch>
          <Route path="/" exact component={HomeComponent}/>
          <Route path="/place/:id" exact component={PlaceDetail}/>
          <Route path="/experience/:id" exact component={ExperienceDetail} />
        </Switch>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
