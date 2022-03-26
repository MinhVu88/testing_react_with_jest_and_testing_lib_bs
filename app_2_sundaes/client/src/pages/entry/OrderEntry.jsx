import React from 'react';
import Options from './Options';

const OrderEntry = () => {
  return (
    <div>
      <Options type='scoops'/>
      <Options type='toppings'/>
    </div>
  );
};

export default OrderEntry;