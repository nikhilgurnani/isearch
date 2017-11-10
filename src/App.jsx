import React, { Component } from 'react'
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon, Radio } from 'react-bootstrap';

import Tracks from './Tracks';
import Artists from './Artists';
import Album from './Albums';


class App extends Component{

      constructor(props){
            super(props);
            this.state = {
                  query : '',
                  type : 'musicTrack',
                  tracks: null,
                  artists: null,
                  album: null,
                  check: false
            }
      }

      search(){
            const BASE = 'https://itunes.apple.com/search?';
            var HIT_URL = BASE + 'term=' + this.state.query
            if(this.state.type !== '')
                  HIT_URL = HIT_URL + '&' + 'entity=' + this.state.type;
            
            console.log(HIT_URL);

            //Getting shit back from the API
            fetch(HIT_URL, {
                  method: 'GET',
            })
            .then(response => response.json())
            .then(json => {
                  if(this.state.type === 'musicTrack'){
                        var tracks = json.results;
                        this.setState({tracks: tracks});
                        //console.log('tracks', this.state.tracks);
                  }
                  else if(this.state.type === 'musicArtist'){
                        var artists = json.results;
                        this.setState({artists});
                        //console.log('artists', this.state.artists);
                  }
                  else if(this.state.type === 'album'){
                        var album = json.results;                        
                        this.setState({album});
                        //console.log('albums', this.state.album);
                  }
            })
            .catch(err => {
                  console.log(err);
            });
      }
      render(){
                  return(
                        <div className="app">
                              <div className="app-title">Music Search by Apple</div>
                              <FormGroup>
                                    <InputGroup>
                                    <FormControl required type="text" placeholder="Enter Keyword here" value = {this.state.query} 
                                    onChange = {
                                                      event => {
                                                            this.setState({query: event.target.value});
                                                      }
                                          }
                                    onKeyPress = {event => {
                                          if(event.key === 'Enter')
                                                this.search();
                                    }}
                                    />
                                    <InputGroup.Addon onClick = {() => this.search()}>
                                          <Glyphicon glyph="search"></Glyphicon>
                                    </InputGroup.Addon>
                                    </InputGroup>
                                    <InputGroup>
                                          <FormGroup value = {this.state.type} 
                                          onChange = {
                                                event => {
                                                      this.setState({type: event.target.value});
                                                }
                                          }
                                          >
                                                <Radio defaultChecked name="radioGroup" inline defaultValue = "musicTrack">
                                                By Track Name
                                                </Radio>
                                                <Radio name="radioGroup" inline defaultValue = "musicArtist">
                                                By Artist
                                                </Radio>
                                                {' '}
                                                <Radio name="radioGroup" inline defaultValue = "album">
                                                By Album
                                                </Radio>
                                          </FormGroup>
                                    </InputGroup>
                              </FormGroup>
                              <Tracks
                                    tracks = {this.state.tracks}
                              />
                              <Artists
                                    artists = {this.state.artists}
                              />
                              <Album
                                    album = {this.state.album}
                              />
                        </div>
            );
      }
}

export default App;