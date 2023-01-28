import React, { useState } from 'react';
import fetchQuestions from './API';
import { GlobalStyle } from './GlobalSyles';
//Components
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import Footer from './components/Footer';


function App() {

  // console.log(fetchQuestions(9,'medium',13));

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
