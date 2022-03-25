import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from '../Search';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

afterEach(cleanup)

it("renders Search without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Search />, div);
});

// it("renders header correctly", () => {
//     const { getByTestId } = render(<Header />);
//     expect(getByTestId('header'));
// });