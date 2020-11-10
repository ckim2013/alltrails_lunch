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
    <div>
      <NavBar 
        searchWord={ searchWord }
      />
      <List 
        places={ places }
      />
      <Map />
    </div>
  );
};

export default AppView;