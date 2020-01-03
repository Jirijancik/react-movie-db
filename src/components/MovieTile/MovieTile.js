import React from 'react'

import '../../styles/MovieTitle'


const MovieTile = ({MovieTitle, MoviePopularity, MovieImage}) => {


    const MovieImageURL = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${MovieImage}`

    let content = (
        <div className="movie-carousel__title">
            <img className="movie-carousel__title__poster" src={MovieImageURL} alt="Movie Poster"></img>
            <h2> {MovieTitle}</h2>
            <p> {MoviePopularity} </p>
        </div>
    );




    return content;

}

export default MovieTile;