import React from 'react'

import MovieTitle from '../MovieTile'

import '../../styles/MovieCarousel'

import { useHttp } from '../../hooks/http'

const MovieCarousel = ({ carouselTitle, fetchItems, fetchUrl, handleOnWheel }) => {




    const [isloading, fetchedData] = useHttp(
        fetchUrl, []
    )

    let loadedMovies = null;


    if (fetchedData) {
        const data = fetchedData.results;
        data.length = fetchItems;
        loadedMovies = data.map(movie => {
            return (
                <MovieTitle
                    MovieTitle={movie.original_title ? movie.original_title : movie.original_name}
                    MovieImage={movie.poster_path}
                    MoviePopularity={movie.popularity}
                    MovieLanguage={movie.original_language}
                    MovieOverview={movie.overview}

                    key={movie.id}
                ></MovieTitle>
            )
        })
    }


    let content = <p className="movie-carousel">Loading Movies...</p>;



    if (!isloading && loadedMovies) {
        content = [
            <h2>{carouselTitle}</h2>,

            <div
                className="movie-carousel"
                onWheel={handleOnWheel}
            >
                <button
                    className="movie-carousel__button movie-carousel__button--left"
                    onClick = {e => e.target.parentElement.scrollLeft -=450}
                >{"<"}</button>
                {loadedMovies}
                <button
                    className="movie-carousel__button movie-carousel__button--right"
                    onClick = {e => e.target.parentElement.scrollLeft +=450}
                >{">"}</button>
            </div>,

        ]
        console.log(fetchedData.results)
    } else if (!isloading && !loadedMovies) {
        content = <p className="movie-carousel">Failed to fetch character.</p>;
    }
    return content;

}

export default MovieCarousel;