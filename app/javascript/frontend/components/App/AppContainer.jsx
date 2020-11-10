import React, { Component } from 'react';

import AppView from './AppView';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchWord: '',
      places: [],
    };
  }

  render() {
    const {
      searchWord,
      places,
    } = this.state;
    
    return (
      <AppView
        searchWord={ searchWord }
        places={ places }
      />
    );
  }
}