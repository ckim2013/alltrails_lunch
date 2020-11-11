import React from 'react';

const NavBarView = (props) => {
  const { 
    handleChange,
    query,
  } = props;
  
  return (
    <div className="navbar-wrapper">
      <div className="title-wrapper">
        <img src="https://cdn-assets.alltrails.com/assets/shared/AT_Main_Logo-da354e8947c2636e86fb27f60cbb037b.png" alt="Logo" />
        <div>at Lunch</div>
      </div>
      <div className="options-wrapper">
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