import React from 'react';
import './App.css';
import HeaderComponent from './shared/header/header';
import FooterComponent from './shared/footer/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
