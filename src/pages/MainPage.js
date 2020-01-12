import React from 'react'

//Importing Components
import MovieCarousel from "../components/MovieCarousel"

//Importing Styles
import '../styles/MainPage';

/**
* Main Page: Consists of Main Title and Movie Carousel Components. Here are stored variables of Fetch URLs.
*/
const MainPage = () => {

    // Variables with URLs
    const PopularMoviesUrl = "https://api.themoviedb.org/3/discover/movie?api_key=98ce4db000fae9862ed2b07152868c56&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1";
    const PupularTvShowsUrl = "https://api.themoviedb.org/3/tv/popular?api_key=98ce4db000fae9862ed2b07152868c56&language=en-US&page=1";

    return [
        <h1 key="MainPageTitle" className="main-page__title">Movie_DB</h1>,

        <MovieCarousel
            carouselTitle="Popular Movies"
            fetchItems={8}
            fetchUrl={PopularMoviesUrl}
            key="PopularMoviesCarousel"
            id = "PopularMoviesCarousel"
        ></MovieCarousel>,

        <MovieCarousel
            carouselTitle="Popular TV Shows"
            fetchItems={15}
            fetchUrl={PupularTvShowsUrl}
            key="PopularTvShowsCarousel"
            id ="PopularMoviesCarousel"
        ></MovieCarousel>,
    ];
}

export default MainPage;