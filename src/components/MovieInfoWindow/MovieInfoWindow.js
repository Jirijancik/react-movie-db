import React from 'react'

//Import components
import ShakaMoviePlayer from '../ShakaMoviePlayer/ShakaMoviePlayer'

//Import styles
import '../../styles/MovieInfoWindow'

/**
 * Movie Info Window is component that provides user with additional information about the selected Movie. 
 * It consists of Header, Popularity, Language, Overview and Trailer - played with Shaka Player.
 */
const MovieInfoWindow = ({ MovieTitle, MoviePopularity, MovieLanguage, MovieOverview, id }) => {

    let content = [
        //Movie Name
        <h1
            className="movie-carousel__info-window__header"
            data-testid="MovieInfoWindowHeaderTest"
            key={id + " header"}
        >{MovieTitle}
        </h1>,

        //Movie Popularity with style span
        <div
            className="movie-carousel__info-window__popularity"
            key={id + " popularity"}
        >Popularity: <span className="movie-carousel__info-window__span--purple">{MoviePopularity}</span>
        </div>,

        //Movie Language
        <p
            className="movie-carousel__info-window__language"
            key={id + " language"}
        >Language: {MovieLanguage}</p>,

        //Movie Overview
        <p
            className="movie-carousel__info-window__overview"
            key={id + " overview"}
        >Overview: {MovieOverview}</p>,

        //Shaka Player Component
        <ShakaMoviePlayer id={id + " Shaka Player"} key={id + " Shaka Player"}></ShakaMoviePlayer>
    ]

    //Returning Content
    return content;
}

export default MovieInfoWindow;