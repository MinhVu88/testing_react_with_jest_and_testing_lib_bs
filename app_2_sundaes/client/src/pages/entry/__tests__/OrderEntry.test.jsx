/* eslint-disable jest/no-mocks-import */
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../__mocks__/server';
import OrderEntry from '../OrderEntry';

describe('test error responses from msw', () => {
  test.skip('a sample test', () => {})

  test.only('handle error for scoops & toppings routes', async () => {
    server.resetHandlers(
      rest.get(
        'http://localhost:3030/scoops',
        (req, res, ctx) => res(ctx.status(500))
      ),
      rest.get(
        'http://localhost:3030/toppings',
        (req, res, ctx) => res(ctx.status(500))
      )
    );

    render(<OrderEntry/>);

    // const alerts = await screen.findAllByRole(
    //   'alert',
    //   { name: 'An unexpected error occurred. Please try again later' }
    // );

    await waitFor(async () => {
      const alerts = await screen.findAllByRole('alert');

      expect(alerts).toHaveLength(2);
    });
  });
});
