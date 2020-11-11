import React, { Component } from 'react';

import ToggleView from './ToggleView';

export default class ListContainer extends Component { 
  constructor(props) {
    super(props);
  }

  render() {
    const {
      display,
    } = this.props;
    
    let button;
    
    if (display === 'map') {
      button = <button>List</button>;
    } else {
      button = <button>Map</button>;
    }
    
    return (
      <div className="toggle-wrapper">
        { button }
      </div>
    )
  }
}