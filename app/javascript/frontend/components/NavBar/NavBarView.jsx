import React from 'react';

import Logo from 'Assets/images/logo.png';

const NavBarView = (props) => {
  const { 
    handleChange,
    query,
  } = props;
  
  
  console.log('logoo', Logo);
  
  return (
    <div className="navbar-container">
      <div className="title-container">
        <img src={ Logo } alt="Logo" />
        <div>AllTrails at Lunch</div>
      </div>
      <div className="options-container">
        <button>Filter</button>
        <input
          placeholder="Search for a restaurant"
          value={ query }
          onChange={ handleChange }
        />
      </div>
    </div>  
  );
};

export default NavBarView;