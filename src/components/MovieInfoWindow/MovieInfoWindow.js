import React from 'react'



import '../../styles/MovieInfoWindow'


const MovieInfoWindow = ({MovieTitle, MovieImageURL, MoviePopularity, MovieLanguage, MovieOverview}) => {

    let content = [
    <h1 className="movie-carousel__info-window__header">{MovieTitle}</h1>,
    <div className="movie-carousel__info-window__popularity">Popularity: <span className="movie-carousel__info-window__span--purple">{MoviePopularity}</span></div>,
    <p className="movie-carousel__info-window__language">Language: {MovieLanguage}</p>,
    <p className="movie-carousel__info-window__overview">Overview: {MovieOverview}</p>,
    <img className="movie-carousel__info-window__trailer" src={MovieImageURL} alt="Trailer"></img>
    ]

    return content;
}

export default MovieInfoWindow;