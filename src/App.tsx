import React from 'react';
import './App.css';
import HeaderComponent from './shared/header/header';
import HomeComponent from './shared/pages/home/home';
import FooterComponent from './shared/footer/footer';

import PlaceDetail from './shared/component-template/Places/placedetail';
import ExperienceDetail from './shared/component-template/experiences/experiencedetail';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import EditPic from './shared/pages/becomeAHost/editPic/editPic';
import AllPlace from './shared/pages/places/places';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
      <HeaderComponent />
        <Switch>
          <Route path="/" exact component={HomeComponent}/>
          <Route path="/place/:id" exact component={PlaceDetail}/>
          <Route path="/experience/:id" exact component={ExperienceDetail} />
          <Route path="/edit-image/" exact component={EditPic}/>
          <Route path="/places/" exact component={AllPlace} />
        </Switch>
      <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
