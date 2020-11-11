import React, { Component } from 'react';

import ListView from './ListView';

export default class ListContainer extends Component { 
  constructor(props) {
    super(props);
  }

  render() {
    const {
      places,
    } = this.props;
    
    return (
      <div className="list-index">
        {
          places.map(place => {
            return (
              <ListView
                key={ place.reference }
                place={ place }
              />
            );
          })
        }
      </div>
    );
  }
}