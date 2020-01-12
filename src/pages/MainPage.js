import React from 'react'

//Importing Components
import MovieCarousel from "../components/MovieCarousel"

//Importing Styles
import '../styles/MainPage';

//Import link from Router-DOM
import { Link } from 'react-router-dom';

/**
* Main Page: Consists of Main Title and Movie Carousel Components. Here are stored variables of Fetch URLs.
*/
const MainPage = () => {

    // Variables with URLs
    const PopularMoviesUrl = "https://api.themoviedb.org/3/discover/movie?api_key=98ce4db000fae9862ed2b07152868c56&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1";
    const PupularTvShowsUrl = "https://api.themoviedb.org/3/tv/popular?api_key=98ce4db000fae9862ed2b07152868c56&language=en-US&page=1";

    return [
        <div className="main-page-header" key="MainPageTitle">
            <h1 className="main-page__title">Movie_DB</h1>
    
        <Link to="/search">
                <svg className="search-icon" width="149" height="50" viewBox="0 0 149 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M109.621 96.2122L109.369 96.5577L109.671 96.8598L148.099 135.288L134.094 149.293L95.4598 110.659L95.1663 110.365L94.8237 110.6C85.129 117.239 73.4206 121.125 60.8125 121.125C27.5574 121.125 0.5 94.0738 0.5 60.8125C0.5 27.5574 27.5574 0.5 60.8125 0.5C94.0739 0.5 121.131 27.5574 121.131 60.8125C121.131 74.0279 116.855 86.2632 109.621 96.2122ZM60.8187 17.3312C36.8426 17.3312 17.3375 36.8364 17.3375 60.8125C17.3375 84.7886 36.8363 104.294 60.8187 104.294C84.7949 104.294 104.3 84.7886 104.3 60.8125C104.3 36.8364 84.7949 17.3312 60.8187 17.3312Z" fill="white" stroke="black" />
                </svg>
            </Link>
        </div>,

        <MovieCarousel
            carouselTitle="Popular Movies"
            fetchItems={8}
            fetchUrl={PopularMoviesUrl}
            key="PopularMoviesCarousel"
            id="PopularMoviesCarousel"
        ></MovieCarousel>,

        <MovieCarousel
            carouselTitle="Popular TV Shows"
            fetchItems={15}
            fetchUrl={PupularTvShowsUrl}
            key="PopularTvShowsCarousel"
            id="PopularMoviesCarousel"
        ></MovieCarousel>,
    ];
}

export default MainPage;