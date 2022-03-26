import { render, screen } from '@testing-library/react';
import Options from '../Options';

describe('should get proper data returned from msw', () => {
  test('display image for each scoop option from msw', async () => {
    render(<Options type='scoops'/>);

    // get all images from msw, with each pic's alt text ending in "scoop"
    // const scoopPics = screen.getAllByRole('img', { name: /scoop$/i });
    const scoopPics = await screen.findAllByRole('img', { name: /scoops$/i });

    // "toHaveLength(2)" is based on handlers.js
    expect(scoopPics).toHaveLength(2);

    // confirm all the alt text of images
    const altTexts = scoopPics.map(pic => pic.alt);

    expect(altTexts).toEqual(['Chocolate scoops', 'Vanilla scoops']);
  });

  test('display image for each topping option', async () => {
    render(<Options type='toppings'/>);

    const toppingPics = await screen.findAllByRole('img', { name: /toppings$/i });

    expect(toppingPics).toHaveLength(3);

    const altTexts = toppingPics.map(pic => pic.alt);

    expect(altTexts).toEqual([
      'Cherries toppings',
      'M&Ms toppings',
      'Hot fudge toppings'
    ]);
  });
})