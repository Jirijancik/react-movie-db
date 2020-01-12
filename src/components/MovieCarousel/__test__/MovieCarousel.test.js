import React from 'react';
import ReactDOM from 'react-dom';
//Import Component
import MovieCarousel from './../MovieCarousel';
//Import testing libraries 
import { cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

describe('components/MovieCarousel', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup()
    });
    //Basic test controling proper render and unmount
    test("renders without crasihng", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MovieCarousel></MovieCarousel>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});