import React from 'react';

const ListView = (props) => {
  const {
    place,
  } = props;

  const { 
    image_url,
    name,
    price_level,
    rating,
    type,
  } = place;
  
  return (
    <div className="list-item">
      <div className="list-image">
        <img src={ image_url }/>
      </div>
      <div className="list-details">
        <div>{ name }</div>
        <div>{ rating }</div>
        <div>{ `${'$'.repeat(price_level)} • ${ type }` }</div>
      </div>
    </div>  
  );
};

export default ListView;