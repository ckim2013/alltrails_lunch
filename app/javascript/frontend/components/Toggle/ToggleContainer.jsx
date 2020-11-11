import React, { Component } from 'react';

import ToggleView from './ToggleView';

export default class ListContainer extends Component { 
  constructor(props) {
    super(props);
    
    this.state = {
      display: 'map',
    };
    
    this.toggleView = this.toggleView.bind(this);
  }
  
  toggleView() {
    const map = document.getElementById('map');
    
    if (this.state.display === 'map') {
      map.classList.add('hidden');
      this.setState({ display: 'list' });
    } else {
      map.classList.remove('hidden');
      this.setState({ display: 'map' });
    }
  }

  render() {
    const {
      display,
    } = this.state;
    
    return (
      <ToggleView 
        display={ display }
        toggleView={ this.toggleView } 
      />
    );
  }
}