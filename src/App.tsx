import React from 'react';
import './App.css';
import HeaderComponent from './shared/header/header';
import HomeComponent from './shared/pages/home/home';
import FooterComponent from './shared/footer/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <HomeComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
