import React from 'react';
import Rocket from './Rocket';

const { render, fireEvent } = require('@testing-library/react');

test('Rocket component renders correctly', () => {
  const rocket = {
    id: 'rocket-1',
    flickr_images: ['image-url'],
    name: 'Falcon 9',
    reserved: false,
    description: 'Sample rocket description',
  };
  const onReserve = jest.fn();

  const { container, getByText } = render(<Rocket rocket={rocket} onReserve={onReserve} />);

  expect(container).toMatchSnapshot();

  expect(getByText('Falcon 9')).toBeInTheDocument();
  expect(getByText('Sample rocket description')).toBeInTheDocument();

  fireEvent.click(getByText('Reserve Rocket'));
  expect(onReserve).toHaveBeenCalledWith('rocket-1');
});
