import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

test('RestaurantsPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const { container } = render((
    <RestaurantsPage />
  ));

  expect(dispatch).toBeCalled();

  expect(container).toHaveTextContent('서울');
  expect(container).toHaveTextContent('한식');
});
