import React from 'react';
import './App.css';
import HeaderComponent from './shared/header/header';
import Login from "./shared/modal/login/login"

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderComponent />
    </div>
  );
}

export default App;
