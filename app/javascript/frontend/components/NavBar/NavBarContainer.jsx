import React, { Component } from 'react';
import axios from 'axios';

import NavBarView from './NavBarView';

export default class NavBarContainer extends Component { 
  constructor(props) {
    super(props);
    
    this.onEnter = this.onEnter.bind(this);
  }
  
  onEnter(e) {
    if (e.keyCode === 13) {
      const csrfToken = document.querySelector("meta[name=csrf-token]").content;
      axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

      const {
        query,
        updatePlaces,
      } = this.props;

      axios.get(`/restaurants/fetch?query=${ query }`)
        .then((res) => {
          updatePlaces(res.data.places);
        })
        .catch((res) => {
          console.log('some error has occurred');
        });
    }
  }

  render() {
    const {
      handleChange,
      onEnter,
      query,
    } = this.props;
    
    return (
      <NavBarView
        handleChange={ handleChange }
        onEnter={ this.onEnter }
        query={ query }
      />
    );
  }
}