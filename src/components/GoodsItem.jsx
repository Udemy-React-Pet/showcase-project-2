import React, { useContext } from 'react';

import { ShowcaseContext } from '../context';

function GoodsItem(props) {

  const { id, name, description, price, full_background } = props;

	const { addToCart } = useContext(ShowcaseContext);

	const defaultImage = `https://placehold.co/600x400?text=${name}`;

  return (
    <div className='card' id={id}>
      <div className='card-image'>
        <img
          src={full_background}
					onError={(e) => {
						e.target.onerror = null;
						e.target.src = defaultImage;
					}}
					alt={name}
        />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button className='btn green darken-1' onClick={() => addToCart({id, name, price})}>Купить</button>
        <span className='right' style={{ fontSize: '1.8rem' }}>
					₵ {price}
        </span>
      </div>
    </div>
  );
}

export default GoodsItem;
