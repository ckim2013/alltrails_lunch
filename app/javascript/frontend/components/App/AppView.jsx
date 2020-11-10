import React from 'react';

import NavBar from '../NavBar/NavBarContainer';
import List from '../List/ListContainer';
import Map from '../Map/MapContainer';

const AppView = (props) => {
  const {
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