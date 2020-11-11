import React, { Component } from 'react';

import AppView from './AppView';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      display: 'map',
      places: [],
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.updatePlaces = this.updatePlaces.bind(this);
  }
  
  handleChange(e) {
    this.setState({ query: e.target.value });
  }
  
  updatePlaces(places) {
    this.setState({ places: places });
  }

  render() {
    const {
      display,
      places,
      query,
    } = this.state;
    
    return (
      <AppView
        display={ display }
        handleChange={ this.handleChange }
        places={ places }
        query={ query }
        updatePlaces={ this.updatePlaces }
      />
    );
  }
}