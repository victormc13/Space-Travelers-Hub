import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Profile from '../components/Profile/Profile';

test('Profile component renders correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
