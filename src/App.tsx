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
import AllExperience from './shared/pages/experiences/experiences';
import DatePicker from './shared/component-template/date-picker/date-picker';
import UserReview from './shared/component-template/review/userReview';
import Proto from './prototype/testing-page/proto-page';

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
          <Route path="/experiences/" exact component={AllExperience} />
          <Route path="/reviewTest/" exact component={UserReview} />
          <Route path="/testDate" exact component={DatePicker} />
          <Route path="/proto/" exact component={Proto} />
        </Switch>
      <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
