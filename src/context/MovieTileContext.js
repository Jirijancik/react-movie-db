import React, { useState, createContext } from 'react';

//Context with default values - needed for Jest Unit Testing
export const MovieTitleContext = createContext([{}, function() {}]);

//Movie Tile Provider with Global State containing Movie Title ID that is currently active
export const MovieTileProvider = (props) => {
    const [tileStateId, setTileStateId] = useState(null);


    return(
        <MovieTitleContext.Provider value={[tileStateId, setTileStateId]} key={"MovieTitleContext"}>
            {props.children}
        </MovieTitleContext.Provider>
    );
}