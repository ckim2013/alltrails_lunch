import React, { Component } from 'react';

import MapView from './MapView';

const mapOptions = {
  center: {
    lat: 37.76990128158148,
    lng: -122.44434326464842,
  },
  zoom: 13,
};

export default class MapContainer extends Component { 
  constructor(props) {
    super(props);
    
    this.markers = [];
  }
  
  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }
  
  shouldComponentUpdate(nextProps) {
    if (this.props.places != nextProps.places) {
      this.markers.forEach(marker => {
        marker.setMap(null);
      });
      
      this.markers = [];
      
      nextProps.places.forEach(spot => {
        const latLng = new google.maps.LatLng(spot.lat, spot.lng);
        const marker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,
          position: latLng,
          map: this.map,
        });
        this.markers.push(marker);
      });
    }
  }
  
  handleMarkerClick() {
    
  }

  render() {
    return (
      <MapView />
    );
  }
}