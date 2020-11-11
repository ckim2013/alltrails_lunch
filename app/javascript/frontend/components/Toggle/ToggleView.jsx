import React from 'react';

const ToggleView = (props) => {
  const {
    display,
    toggleView,
  } = props;
  
  let button;

  if (display === 'map') {
    button = <button className='toggle-button' onClick={ toggleView }><i class="fa fa-list-ul" aria-hidden="true"></i>&nbsp;List</button>;
  } else {
    button = <button className='toggle-button' onClick={ toggleView }><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;Map</button>;
  }
  
  return (
    <div className="toggle-wrapper">
      { button }
    </div>
  )
};

export default ToggleView;