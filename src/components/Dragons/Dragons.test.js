import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Dragons from './Dragons';

test('Dragons component renders correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <Dragons />
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
