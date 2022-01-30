import React from 'react';

interface Props{
  item: {
    id: string;
    name: string;
    price: number;
    image?: string;
  }
}

const ItemCard: React.FC<Props> = () => {
  return <div></div>;
};

export default ItemCard;
