import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import App from './App';


import { sessionService, sessionReducer } from 'redux-react-session'
import { createStore } from 'redux'

let store = createStore(sessionReducer);
const options = { driver: 'COOKIES' };
sessionService.initSessionService(store, options);
sessionService.loadSession().then(current => {
      console.log(current);
      if(current.status !== 'unknown'){
            ReactDOM.render(
                  <App />, document.getElementById('root')
            )
      }
      else{
            ReactDOM.render(
                  <Home />, document.getElementById('root')
            )
      }
})
.catch(err => {
      ReactDOM.render(
                  <Home />, document.getElementById('root')
            )
});