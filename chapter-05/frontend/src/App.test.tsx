import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  expect(1).toEqual(2)
});
*/

test('renders unanswered questions text', () => {
  render(<App />);
  const textElement = screen.getByText(/unanswered questions/i);
  expect(textElement).toBeInTheDocument();
});

test('renders ask a question button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/ask a question/i);
  expect(buttonElement).toBeInTheDocument();
});
