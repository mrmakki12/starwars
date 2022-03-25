import React from 'react';
import ReactDOM from 'react-dom';
import { Results } from '../Results.js';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it("renders Results without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Results />, div);
});

