import React, { Component } from 'react';
import {Map,Marker, GoogleApiWrapper} from "google-maps-react"

class googleMapMaker extends Component {
  render() {
    const style= {position:'absolute',width:'80%', height:'50%',}
    return (
      <div style={style}>
        <h4 className="bg-light text-dark px-3" >Locaţie</h4>
      <Map google={this.props.google}
          onClick={this.onMapClicked}
          zoom={17}
          style={{width: '100%', height: '70%', position: 'relative'}}
          className={'map'}
          initialCenter={{
            lat: 46.7709823,
            lng: 23.598770899999977
          }}>
          <Marker
            title={'Tribunalul Cluj'}>
            position={{lat: 46.7709823, lng: 23.598770899999977}}
          </Marker>
      </Map>
      </div>

    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDloFBSBaw-l6uIuNOQ7JI4DK_L5yJcL6c")
})(googleMapMaker);