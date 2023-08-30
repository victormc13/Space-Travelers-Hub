import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Rockets from './Rockets';

test('Rockets component renders correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
