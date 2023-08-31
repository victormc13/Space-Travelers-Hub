import React from 'react';
import Dragon from '../components/Dragons/Dragon';

const { render, fireEvent } = require('@testing-library/react');

test('Dragon component renders correctly', () => {
  const dragon = {
    id: 'dragon-1',
    flickr_images: ['image-url'],
    name: 'Falcon 9',
    reserved: false,
    description: 'Sample dragon description',
  };
  const onReserve = jest.fn();

  const { container, getByText } = render(<Dragon dragon={dragon} onReserve={onReserve} />);

  // Assert that the component renders correctly
  expect(container).toMatchSnapshot();

  // Assert that dragon name and description are visible
  expect(getByText('Falcon 9')).toBeInTheDocument();
  expect(getByText('Sample dragon description')).toBeInTheDocument();

  // Simulate button click and assert callback function
  fireEvent.click(getByText('Reserve dragon'));
  expect(onReserve).toHaveBeenCalledWith('dragon-1');
});
