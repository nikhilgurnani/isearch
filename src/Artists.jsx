import React, { Component } from 'react'
import './App.css'

class Artists extends Component{
      render(){
            let artists = this.props.artists;
            let headers = null;
            let rows = [];

            if(artists !== null){
                  headers = <tr>
                              <th>Artist Name</th>
                              <th>Genre</th>
                        </tr>
                  
                  artists.forEach(function(element) {
                        rows[rows.length] = <tr>
                                                <td><a href={element.artistLinkUrl}>{element.artistName}</a></td>
                                                <td>{element.primaryGenreName}</td>
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

export default Artists;