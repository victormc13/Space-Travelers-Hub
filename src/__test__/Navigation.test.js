import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';

test('Navigation component renders correctly', () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  );

  expect(screen.getByText("Space Travelers' Hub")).toBeInTheDocument();
  const rocketsLink = screen.getByRole('link', { name: 'Rockets' });
  expect(rocketsLink).toBeInTheDocument();
  const missionsLink = screen.getByRole('link', { name: 'missions' });
  expect(missionsLink).toBeInTheDocument();
  const dragonsLink = screen.getByRole('link', { name: 'dragons' });
  expect(dragonsLink).toBeInTheDocument();
  const myProfile = screen.getByRole('link', { name: 'my profile' });
  expect(myProfile).toBeInTheDocument();
});
