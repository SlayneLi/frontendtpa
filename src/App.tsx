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
import TestStep from './prototype/stepper/stepper';
import BecomeHost from './shared/pages/becomeAHost/mainPage/becomeHost';
import BecomePlaceHost from './shared/pages/becomeAHost/place/becomePlaceHost';
import ProtoPage from './prototype/testing-page/proto-page';
import HeaderExpSteps from './shared/pages/becomeAHost/experience/step/header/headerExpStep';
import DatePicker from './shared/component-template/date-picker/date-picker';
import UserReview from './shared/component-template/review/userReview';
import Profile from './shared/pages/userpage/profile/profile';
import Proto from './prototype/testing-page/proto-page';
import SavedPlan from './shared/pages/savedPlan/savedPlan';
import SaveDetail from './shared/pages/saveplanDetail/save-detail-page';
import BookingHistory from './shared/pages/booking/bookingHistory/bookingHistory';
import UserPage from './shared/pages/userpage/usermain/userpage'
import BookingPlace from './shared/pages/booking/bookingplace/bookingplace';
import BookingExperience from './shared/pages/booking/bookingexperience/bookingexperience';
import ChatDetail from './shared/pages/chatdetail/chat-detail'

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
          <Route path="/step-test/" exact component={TestStep} />
          <Route path="/proto/" exact component={ProtoPage} />
          <Route path="/become-host/" exact component={BecomeHost}/>
          <Route path="/become-place-host/" exact component={BecomePlaceHost} />
          <Route path="/become-experience-host/" exact component={HeaderExpSteps} />
          <Route path="/reviewTest/" exact component={UserReview} />
          <Route path="/testDate" exact component={DatePicker} />
          <Route path="/proto/" exact component={Proto} />
          <Route path="/profile/" exact component={Profile} />
          <Route path="/save-plans" exact component={SavedPlan}/>
          <Route path="/save-plan/:id" exact component={SaveDetail} />
          <Route path="/booking-history/" exact component={BookingHistory} />
          <Route path="/booking-place/:id" exact component={BookingPlace}/>
          <Route path="/booking-experience/:id" exact component={BookingExperience}/> 
          <Route path="/userpage" exact component={UserPage}/>
          <Route path="/chat-details" exact component={ChatDetail} />
        </Switch>
      <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
