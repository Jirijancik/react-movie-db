import React from 'react'

import MoviePlayer from '../MoviePlayer'

import '../../styles/MovieInfoWindow'
import ShakaMoviePlayer from '../ShakaMoviePlayer/ShakaMoviePlayer'


const MovieInfoWindow = ({ MovieTitle, MovieImageURL, MoviePopularity, MovieLanguage, MovieOverview, id}) => {




    let content = [
        <h1 className="movie-carousel__info-window__header">{MovieTitle}</h1>,
        <div className="movie-carousel__info-window__popularity">Popularity: <span className="movie-carousel__info-window__span--purple">{MoviePopularity}</span></div>,
        <p className="movie-carousel__info-window__language">Language: {MovieLanguage}</p>,
        <p className="movie-carousel__info-window__overview">Overview: {MovieOverview}</p>,

    //    <MoviePlayer 
    //    MovieImageURL={MovieImageURL}
       
    //    key={id+"player"+MovieImageURL}
    //    ></MoviePlayer>

        <ShakaMoviePlayer></ShakaMoviePlayer>
            
    ]

    return content;
}

export default MovieInfoWindow;