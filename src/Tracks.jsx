import React, { Component } from 'react'
import './App.css';

class Tracks extends Component{
      render(){
            let tracks = this.props.tracks;
            let headers = null;
            let rows = [];

            if(tracks !== null){
                  headers = <tr>
                              <th>Track Name</th>
                              <th>Track Price</th>
                              <th>Artist</th>
                              <th>Album Price</th>
                              <th>Preview</th>
                              <th>Genre</th>
                              <th>Rating</th>
                        </tr>;
                  tracks.forEach(function(element) {
                        rows[rows.length] = <tr>
                                                <td><a href = {element.trackPreviewUrl}>{element.trackName}</a></td>
                                                <td>${element.trackPrice}</td>
                                                <td>{element.artistName}</td>
                                                <td>${element.collectionPrice}</td>
                                                <td><a href = {element.previewUrl}>Preview Track</a></td>
                                                <td>{element.primaryGenreName}</td>
                                                <td>{element.trackExplicitness}</td>
                                          </tr>;

                  }, this);
            }
            
            return(
                  <div>
                        <table className="table table-bordered table-hover">
                              <tbody>
                                    {headers}
                                    {rows}
                              </tbody>
                        </table>
                  </div>
            )
      }
}

export default Tracks;