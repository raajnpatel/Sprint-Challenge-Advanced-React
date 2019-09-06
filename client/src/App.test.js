import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('darkmode', () => {
  let clicked = false;
  const { getByText } = render(<App darkmode={() => clicked = true} />);
  const toggleDark = getByText(/dark mode/i);
  fireEvent.click(toggleDark);
  expect(clicked).toBe(false);
});

it('darkmode', () => {
  let clicked = true;
  const { getByText } = render(<App darkmode={() => clicked = false} />);
  const toggleDark = getByText(/dark mode/i);
  fireEvent.click(toggleDark);
  expect(clicked).toBe(true);
});