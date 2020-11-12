import React, { Component } from 'react';

import AppView from './AppView';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      display: 'map',
      focus: '',
      places: [],
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.updatePlaces = this.updatePlaces.bind(this);
    this.setFocus = this.setFocus.bind(this);
  }
  
  handleChange(e) {
    this.setState({ query: e.target.value });
  }
  
  setFocus(id) {
    this.setState({ focus: id });
  }
  
  updatePlaces(places) {
    this.setState({ places: places });
  }

  render() {
    const {
      display,
      focus,
      places,
      query,
    } = this.state;
    
    return (
      <AppView
        display={ display }
        focus={ focus }
        handleChange={ this.handleChange }
        places={ places }
        query={ query }
        setFocus={ this.setFocus }
        updatePlaces={ this.updatePlaces }
      />
    );
  }
}