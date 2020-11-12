import React from 'react';

import NavBar from '../NavBar/NavBarContainer';
import List from '../List/ListContainer';
import Map from '../Map/MapContainer';
import Toggle from '../Toggle/ToggleContainer';

const AppView = (props) => {
  const {
    display,
    focus,
    handleChange,
    places,
    query,
    setFocus,
    updatePlaces,
  } = props;
  
  return (
    <div className="app-wrapper">
      <NavBar 
        handleChange={ handleChange }
        query={ query }
        updatePlaces={ updatePlaces }
      />
      <Toggle
        display={ display }
      />
      <div className='list-map-wrapper'>
        <List 
          focus={ focus }
          places={ places }
          setFocus={ setFocus }
        />
        <Map 
          places={ places }
        />
      </div>
    </div>
  );
};

export default AppView;