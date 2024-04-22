import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import AppBody from './components/AppBody/AppBody';

const App = () => {
  return (
    // TODO update this to use appBody which has sidebar and chatHome nested inside it
    // this will allow events from sidebar to be passed to AppBody which will render 
    // chatHome with or without previous chat

    // NOTE getMessages will have to be moved to here if appBody used then ChatHome will take messages
    // instead of a bool

    // will have to update so it will display chat only if logged in else register or login
    <React.Fragment>
      <Header />
      <AppBody />
    </React.Fragment>
  );
}

export default App;
