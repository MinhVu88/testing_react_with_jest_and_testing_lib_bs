/* eslint-disable jest/valid-title */
import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

// test("App should render the 'learn react' link", () => {
//   render(<App/>);

//   // const linkElement = screen.getByText(/learn react/i);
//   // const linkElement = screen.getByText(/learn react testing lib/i);
//   const linkElement = screen.getByRole(
//     'link',
//     { name: /learn react/i }
//   );

//   expect(linkElement).toBeInTheDocument();
// });

const testDescription1 = 'button has correct initial color';

test(testDescription1, () => {
    render(<App />);
    
    // find an element whose role is button & text of 'Change to Blue/MidnightBlue'
    // const btn = screen.getByRole('button', { name: 'Change to blue' });
    const btn = screen.getByRole('button', { name: 'Change to MidnightBlue' });

    // expect the button's bg color to be red/MediumVioletRed 
    // expect(btn).toHaveStyle({ backgroundColor: 'red' });
    expect(btn).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

    // the button's clicked
    fireEvent.click(btn);

    // expect the button's bg color to be blue/MidnightBlue
    // expect(btn).toHaveStyle({ backgroundColor: 'blue' });
    expect(btn).toHaveStyle({ backgroundColor: 'MidnightBlue' });

    // expect the btn text to be 'Change to red/MediumVioletRed'
    // expect(btn.textContent).toBe('Change to red');
    expect(btn.textContent).toBe('Change to MediumVioletRed');
});

const testDescription2 = 'initial conditions';

test(testDescription2, () => {
  render(<App/>);

  // check whether the btn starts out enabled
  // const btn = screen.getByRole('button', { name: 'Change to blue' });
  const btn = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  expect(btn).toBeEnabled();

  // check whether the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

const testDescription3 = 'checkbox 1st clicked disables btn & checkbox 2nd clicked enables btn';

test(testDescription3, () => {
  render(<App/>);

  // const btn = screen.getByRole('button', { name: 'Change to blue' });
  const btn = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(btn).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).toBeEnabled();
});

const testDescription4 = 'disabled btn has its gray bg reverted to red/MediumVioletRed when checkbox is clicked';

test(testDescription4, () => {
  render(<App/>);

  // const btn = screen.getByRole('button', { name: 'Change to blue' });
  const btn = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // disable btn
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle('background-color: gray');

  // re-enable btn
  fireEvent.click(checkbox);
  // expect(btn).toHaveStyle('background-color: red');
  expect(btn).toHaveStyle('background-color: MediumVioletRed');
});

const testDescription5 = 'btn has its red bg reverted to blue/MidnightBlue when it is clicked, '
      .concat('blue/MidnightBlue to gray when checkbox is clicked & ')
      .concat('gray to blue/MidnightBlue when checkbox is clicked again');

test(testDescription5, () => {
  render(<App/>);

  // const btn = screen.getByRole('button', { name: 'Change to blue' });
  const btn = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // red to blue
  fireEvent.click(btn);

  // disable btn
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle('background-color: gray');

  // re-enable btn
  fireEvent.click(checkbox);
  // expect(btn).toHaveStyle('background-color: blue');
  expect(btn).toHaveStyle('background-color: MidnightBlue');
});

// combine tests in a describe statement
const description = 'spaces before camel-case capital letters';
const test1 = 'works for a lowercase color name';
const test2 = 'works for a color name that has at least 1 uppercase letter';
const test3 = 'works for a color name that contains various uppercase letters';

describe(description, () => {
  test(test1, () => {
    // expect(replaceCamelWithSpaces('Red')).toBe('Red');

    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });

  test(test2, () => {
    // expect(replaceCamelWithSpaces('blue')).toBe('blue');

    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test(test3, () => {
    // expect(replaceCamelWithSpaces('Red')).toBe('Red');

    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});