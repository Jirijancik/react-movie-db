import React, { useState, createContext } from 'react';

//Context
export const MovieTitleContext = createContext();

//Movie Tile Provider with Global State containing Movie Title ID that is currently active
export const MovieTileProvider = (props) => {
    const [tileStateId, setTileStateId] = useState(null);


    return(
        <MovieTitleContext.Provider value={[tileStateId, setTileStateId]} key={"MovieTitleContext"}>
            {props.children}
        </MovieTitleContext.Provider>
    );
}