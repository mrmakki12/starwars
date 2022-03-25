import React from 'react';
import ReactDOM from 'react-dom';
import { Results } from '../Results.js';
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

afterEach(cleanup);

it("renders Results without crashing", () => {
    const div = document.createElement("div");
    renderRedux(<Results />, div);
});

it("renders Results correctly", () => {
    const { getByTestId } = render(
    <Provider store={store}>
        <Results />
    </Provider>
    );
    expect(getByTestId('results'));
});
