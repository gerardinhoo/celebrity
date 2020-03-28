import React from 'react';
import Celebrity from "./components/celebrity";
import ModalMessage from "./components/modalMessage"
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ModalMessage />
      <Celebrity title="Some Celebrity" />
    </div>
  );
}

export default App;
