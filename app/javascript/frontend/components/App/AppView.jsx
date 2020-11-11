import React from 'react';

import NavBar from '../NavBar/NavBarContainer';
import List from '../List/ListContainer';
import Map from '../Map/MapContainer';
import Toggle from '../Toggle/ToggleContainer';

const AppView = (props) => {
  const {
    display,
    handleChange,
    places,
    query,
  } = props;
  
  return (
    <div className="app-wrapper">
      <NavBar 
        handleChange={ handleChange }
        query={ query }
      />
      <Toggle
        display={ display }
      />
      <List 
        places={ places }
      />
      <Map 
        places={ places }
      />
    </div>
  );
};

export default AppView;