import React, { Component } from 'react';
import axios from 'axios';

import AppView from './AppView';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      places: [],
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState({ query: e.target.value });
    clearTimeout(this.delayTimer);
    this.delayTimer = setTimeout(() => {
      const csrfToken = document.querySelector("meta[name=csrf-token]").content;
      axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
      
      axios.get(`/restaurants/fetch?query=${ this.state.query }`)
        .then((res) => {
          this.setState({ places: res.data.places });
        })
        .catch((res) => {
          console.log('some error has occurred');
        });
      
    }, 500);
  }

  render() {
    const {
      places,
      query,
    } = this.state;
    
    return (
      <AppView
        handleChange={ this.handleChange }
        places={ places }
        query={ query }
      />
    );
  }
}