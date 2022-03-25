import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from '../Card.js';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it("renders Card without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
});

it("renders Card correctly", () => {
    // sample people data
    const data = {
        name: 'Tyreeck Makk',
        homeworld: 'Mother Earth',
        gender: 'Male',
        mass: 'Thats a personal matter'
    }
    const { getByTestId } = render(<Card category='people' data={data}/>);
    expect(getByTestId('card'));
});

it("renders Card correctly", () => {
    // sample Vehicle data
    const data = {
        name: 'Fiesta',
        model: 'SE 4 cyclinder 5-speed manual',
        manufacturer: 'Ford',
        cargo_capacity: '4.5',
        vehicle_class: 'small sedan'
    }
    
    const { getByTestId } = render(<Card category='vehicles' data={data}/>);
    expect(getByTestId('card'));
})