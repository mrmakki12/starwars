import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from '../Header.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

it("renders header without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
});

it("renders header correctly", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header'));
});