import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from '../Search';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { Provider, useDispatch } from 'react-redux';
import { store } from '../../../store.js';


const renderRedux = (component) => {
    render(
        <Provider store={store}>
            {component}
        </Provider>
    )
}

afterEach(cleanup)

it("renders Search without crashing", () => {
    const div = document.createElement("div");
    renderRedux(<Search />, div);
});

it("renders Search correctly", () => {
    const { getByTestId } = render(
    <Provider store={store}>
        <Search />
    </Provider>
    );
    expect(getByTestId('search'));
});