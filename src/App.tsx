import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ChatHome from './pages/ChatHome/ChatHome';
import { ToastContainer, toast } from 'react-toastify';
import ToastOptions from './interfaces/props/toastOptions';
import AppBody from './components/AppBody/AppBody';

function App() {
  // look up toastOptions in react-toastify docs
  const showToast = (message: string, options: ToastOptions): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      try {
        switch (options.type) {
          case 'success':
            toast.success(message);
            break;
          case 'error':
            toast.error(message);
            break;
          case 'warning':
            toast.warning(message);
            break;
          case 'info':
            toast.info(message);
            break;
        }
        resolve();
      } catch (err) {
        reject();
      }
    });
  }
  return (
    // TODO update this to use appBody which has sidebar and chatHome nested inside it
    // this will allow events from sidebar to be passed to AppBody which will render 
    // chatHome with or without previous chat

    // NOTE getMessages will have to be moved to here if appBody used then ChatHome will take messages
    // instead of a bool

    // will have to update so it will display chat only if logged in else register or login
    <React.Fragment>
      <ToastContainer />
      <Header />
      {/* <AppBody /> */}
      <Sidebar />
      <ChatHome />
    </React.Fragment>
  );
}

export default App;
