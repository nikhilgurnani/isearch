import React, { Component } from 'react'
import './App.css'

class Album extends Component{
      render(){
            let album = this.props.album;
            let headers = null;
            let rows = [];

            if(album !== null){
                  headers = <tr>
                                    <th>Album Name</th>
                                    <th>Artist Name</th>
                                    <th>Genre</th>
                                    <th>Rating</th>
                                    <th>Price</th>
                                    <th>Number of Tracks</th>
                              </tr>;
                  album.forEach(function(element) {
                        rows[rows.length] = <tr>
                                                <td><a href={element.collectionViewUrl}>{element.collectionName}</a></td>
                                                <td><a href={element.artistViewUrl}>{element.artistName}</a></td>
                                                <td>{element.primaryGenreName}</td>
                                                <td>{element.collectionExplicitness}</td>
                                                <td>${element.collectionPrice}</td>
                                                <td>{element.trackCount}</td>
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

export default Album;