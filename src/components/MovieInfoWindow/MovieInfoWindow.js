import React from 'react'

//Import components
import ShakaMoviePlayer from '../ShakaMoviePlayer/ShakaMoviePlayer'

//Import styles
import '../../styles/MovieInfoWindow'

/**
 * Movie Info Window is component that provides user with additional information about the selected Movie. 
 * It consists of Header, Popularity, Language, Overview and Trailer - played with Shaka Player.
 */
const MovieInfoWindow = ({ MovieTitle, MoviePopularity, MovieLanguage, MovieOverview, id}) => {

    let content = [
        <h1 className="movie-carousel__info-window__header">{MovieTitle}</h1>,
        <div className="movie-carousel__info-window__popularity">Popularity: <span className="movie-carousel__info-window__span--purple">{MoviePopularity}</span></div>,
        <p className="movie-carousel__info-window__language">Language: {MovieLanguage}</p>,
        <p className="movie-carousel__info-window__overview">Overview: {MovieOverview}</p>,

        //Shaka Player Component
        <ShakaMoviePlayer id={id}></ShakaMoviePlayer> 
    ]

    //Returning Content
    return content;
}

export default MovieInfoWindow;