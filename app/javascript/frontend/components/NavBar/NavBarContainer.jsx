import React, { Component } from 'react';

import NavBarView from './NavBarView';

export default class NavBarContainer extends Component { 
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleChange,
      query,
    } = this.props;
    
    return (
      <NavBarView
        handleChange={ handleChange }
        query={ query }
      />
    );
  }
}