import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import FormControl from 'react-bootstrap'

import App from './App'

import { sessionService, sessionReducer } from 'redux-react-session'
import { createStore } from 'redux'

import FacebookLogin from 'react-facebook-login';
import { browserHistory } from 'react-router';


class Home extends Component{

      responseFacebook(response) {
           console.log(response);
            let store = createStore(sessionReducer);
            const options = { driver: 'COOKIES' };
            sessionService.initSessionService(store, options);

            let content = response;
            sessionService.saveSession(content)
            .then(() => {
                  window.location.reload();
            });

      }

      render(){
            return(<div>
                        <FacebookLogin
                        appId="171365053446133"
                        autoLoad={true}
                        fields="name,email,picture"
                        scope="public_profile,user_friends,user_actions.books"
                        callback={this.responseFacebook}
                        />
                  </div>
                  );
      }
}

export default Home;