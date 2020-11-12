import React from 'react';
import StarRatings from 'react-star-ratings';

const ListView = (props) => {
  const {
    focus,
    focusOnItem,
    place,
  } = props;

  const { 
    image_url,
    reference,
    name,
    price_level,
    rating,
    type,
  } = place;
  
  return (
    <div 
      id={ reference } 
      onClick={ focusOnItem } 
      className="list-item">
      <div className="list-image">
        <img src={ image_url }/>
      </div>
      <div className="list-details">
        <div className="list-details__name">{ name }</div>
        <div className="list-details__rating">
          <StarRatings
            rating={ rating }
            starRatedColor="#f6d14a"
            starDimension='15px'
            starSpacing='2px'
            numberOfStars={ 5 }
            name='rating'
          />
        </div>
        <div className="list-details__price">{ `${'$'.repeat(price_level)} • ${ type }` }</div>
      </div>
    </div>  
  );
};

export default ListView;