import React, { useState, createContext } from 'react';


export const MovieTitleContext = createContext();


export const MovieTitleProvider = (props) => {
    const [titleState, setTitleState] = useState(null);


    return(
        <MovieTitleContext.Provider value={[titleState, setTitleState]} key={"MovieTitleContext"}>
            {props.children}
        </MovieTitleContext.Provider>
    );
}