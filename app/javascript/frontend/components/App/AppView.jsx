import React from 'react';

import NavBar from '../NavBar/NavBarContainer';
import List from '../List/ListContainer';
import Map from '../Map/MapContainer';

const AppView = (props) => {
  const {
    searchWord,
    places,
  } = props;
  
  return (
    <div className="app-wrapper">
      <NavBar 
        searchWord={ searchWord }
      />
      <div className='list-map-wrapper'>
        <List 
        places={ places }
        />
        <Map />
      </div>
    </div>
  );
};

export default AppView;