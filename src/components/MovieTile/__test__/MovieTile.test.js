import React from 'react';
import ReactDOM from 'react-dom';
//Import Component
import MovieTile from './../MovieTile';
//Import testing libraries
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

describe('components/MovieTile', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup()
    });
    //Basic test controling proper render and unmount
    test("renders without crasihng", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MovieTile />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    //Test controling if elements of the components were rendered correctly
    test("renders MovieTile Elements correctly", () => {
        const { getByTestId } = render(
            <MovieTile
                MovieTitle="Random Movie"
                MoviePopularity={50}
                MovieImage='./../../../images/ImageNotFound.jpg'
            ></MovieTile>)

        //If Element with Name contains value
        expect(getByTestId("MovieTileNameTest")).toHaveTextContent("Random Movie");
        //If Element with Poster is defined
        expect(getByTestId('MovieTilePosterTest')).toBeDefined();
        //If Element with Popularity contains value
        expect(getByTestId('MovieTilePopularityTest')).toHaveTextContent(50);
    })
});
