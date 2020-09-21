import React from 'react';
import './App.css';
import Cards from './components/cards/connectedCards';
import Chart from './components/chart/connectedChart';

const App = () => {
  return (
    <div>
      <Cards />
      <Chart />
    </div>
  );
}

export default App;
