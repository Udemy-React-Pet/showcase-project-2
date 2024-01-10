import { useContext } from 'react';

import { ShowcaseContext } from '../context';

import GoodsItem from './GoodsItem';

function GoodsList() {
  const { goods = [] } = useContext(ShowcaseContext);

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default GoodsList;
