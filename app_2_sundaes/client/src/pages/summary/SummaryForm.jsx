import React, { useState } from 'react';
import { Form, Button, Popover, OverlayTrigger } from 'react-bootstrap';

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Body>
        No ice cream delivered
      </Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to 
      <OverlayTrigger overlay={popover} placement='right'>
        <span style={{color: 'blue'}}>Terms and conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId='terms-and-conditions'>
        <Form.Check
          type='checkbox'
          checked={isChecked}
          label={checkboxLabel}
          onChange={e => setIsChecked(e.target.checked)}
        />
      </Form.Group>
      <Button 
        variant='primary' 
        type='submit' 
        disabled={!isChecked}
      >
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;