/*
Write tests to ensure that:
 - Render the SummaryForm component.
 - Checkbox is unchecked by default.
 - Checking checkbox enables button.
 - Unchecking checkbox again disables button.
 - Find checkbox & button using {name} option (use mockup for "name" option values).
 - Check that tests fail (red part of the red-green testing cycle).
*/
import {
  /*fireEvent*/
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

test('initial conditions', () => {
  render(<SummaryForm/>);

  const checkbox = screen.getByRole('checkbox', { name: /Terms and conditions/i });

  expect(checkbox).not.toBeChecked();

  const confirmOrderBtn = screen.getByRole('button', { name: /Confirm order/i });

  expect(confirmOrderBtn).toBeDisabled();
});

test(
  'checking checkbox enables btn & unchecking it later disables btn',
  () => {
    render(<SummaryForm/>);

    const checkbox = screen.getByRole('checkbox', { name: /Terms and conditions/i });
    const confirmOrderBtn = screen.getByRole('button', { name: /Confirm order/i });
    
    // fireEvent.click(checkbox);
    userEvent.click(checkbox);
    expect(confirmOrderBtn).toBeEnabled();

    // fireEvent.click(checkbox);
    userEvent.click(checkbox);
    expect(confirmOrderBtn).toBeDisabled();
  }
);

test('popover responds to mouse over', async () => {
  render(<SummaryForm/>);

  // popover starts out hidden
  const nullPopover = screen.queryByText(/no ice cream delivered/i);

  expect(nullPopover).not.toBeInTheDocument();

  // popover appears when mouse's over checkbox label
  const termsConditions = screen.getByText(/Terms and conditions/i);

  userEvent.hover(termsConditions);

  const popover = screen.getByText(/no ice cream delivered/i);

  expect(popover).toBeInTheDocument();

  // popover disappears when mouse's not over checkbox label
  userEvent.unhover(termsConditions);

  // const nullPopoverAgain = screen.getByText(/no ice cream delivered/i);

  // expect(nullPopoverAgain).not.toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.queryByText(/no ice cream delivered/i));
});