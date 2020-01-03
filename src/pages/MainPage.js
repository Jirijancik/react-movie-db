import React from 'react'

import MovieCarousel from "../components/MovieCarousel"



const MainPage = ( props ) => {

    const PopularMoviesUrl = "https://api.themoviedb.org/3/discover/movie?api_key=98ce4db000fae9862ed2b07152868c56&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1";


    return[
        <h1>MoveDB</h1>,
        <MovieCarousel fetchUrl={PopularMoviesUrl} key="PopularMoviesCarousel"></MovieCarousel>
    ];
}

export default MainPage;