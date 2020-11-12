import React, { Component } from 'react';

import ListView from './ListView';

export default class ListContainer extends Component { 
  constructor(props) {
    super(props);
    
    this.focusOnItem = this.focusOnItem.bind(this);
  }
  
  focusOnItem(e) {
    if (e.target !== e.currentTarget) return;
    
    const {
      focus,
      setFocus,
    } = this.props;

    const currentFocus = document.getElementById(focus);
    if (currentFocus) currentFocus.classList.remove('focused');
    e.target.classList.add('focused');
    setFocus(e.target.id);
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
                focus={ focus }
                focusOnItem={ this.focusOnItem }
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