import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Options from '../Options';

describe(
  'test the sub-total for scoops & toppings, based on the mockups',
  () => {
    test(
      'update scoop sub-total when scoops change',
      () => {
        render(<Options type='scoops'/>);

        // make sure the scoop sub-total starts out at $0.00
        const scoopsSubtotal = screen.getByText(
          'Scoops total: $',
          { exact: false }
        );

        expect(scoopsSubtotal).toHaveTextContent('0.00');

        // update vanilla scoops to 1 & check the sub-total
      }
    )
  }
);