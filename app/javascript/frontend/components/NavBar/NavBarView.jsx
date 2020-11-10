import React from 'react';

const NavBarView = (props) => {
  const { 
    handleChange,
    query,
  } = props;
  
  return (
    <div className="navbar-container">
      <div className="title-container">
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