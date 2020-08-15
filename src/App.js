import React from 'react';
import Header from './Components/Header/'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Logic from './Components/Characters/Logic';
import QuoteGen from './Components/QuoteGen/QuoteGen';

function App() {
  return (
    <div className="container-fluid bg-light">
      <Header />
      {/* <CharacterGrid /> */}
      <Logic />
      <QuoteGen />
    </div>
  );
}

export default App;
