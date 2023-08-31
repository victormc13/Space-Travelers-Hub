import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

test('App component renders correctly', () => {
  const { container } = render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  );

  expect(container).toMatchSnapshot();
});
