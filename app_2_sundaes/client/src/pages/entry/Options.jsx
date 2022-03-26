import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import Scoop from './Scoop';
import Topping from './Topping';
import AlertBanner from '../common/AlertBanner';

const Options = ({ type }) => {
  const [types, setTypes] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // optionType is either "scoops" or "toppings"
    axios.get(`http://localhost:3030/${type}`)
         .then(response => setTypes(response.data))
         .catch(error => setError(error));
  }, [type]);

  if(error) {
    return <AlertBanner/>;
  }

  const Option = type === 'scoops' ? Scoop : Topping;

  const options = types.map(option => 
    <Option
      key={option.name}
      name={option.name}
      imagePath={option.imagePath}
    />  
  );

  return (
    <Row>{options}</Row>
  );
};

export default Options;