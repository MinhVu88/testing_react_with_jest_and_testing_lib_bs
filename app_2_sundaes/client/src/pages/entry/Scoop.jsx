import React from 'react';
import { Col } from 'react-bootstrap';

const Scoop = ({ name, imagePath }) => {
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      style={{ textAlign: 'center' }}
    >
      <img
        style={{ width: '75%' }}
        alt={`${name} scoops`}
        src={`http://localhost:3030/${imagePath}`}
      />
    </Col>
  );
};

export default Scoop;