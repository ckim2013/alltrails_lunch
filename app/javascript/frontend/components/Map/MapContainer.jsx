import React, { Component } from 'react';

import MapView from './MapView';

export default class MapContainer extends Component { 
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    let map;
    const mapOptions = {
      center: { 
        lat: 37.76990128158148, 
        lng: -122.44434326464842,
      },
      zoom: 13,
    }
    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }

  render() {
    return (
      <MapView />
    );
  }
}