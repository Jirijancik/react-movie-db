import React, { useState, useEffect, useRef } from 'react'

import '../../styles/MovieTile'
import MovieInfoWindow from '../MovieInfoWindow/MovieInfoWindow';


const MovieTile = ({ MovieTitle, MoviePopularity, MovieImage, MovieLanguage, MovieOverview }) => {

    const [isLargeTile, setLargeTile] = useState(false);


    const MovieImageURL = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${MovieImage}`

    const videoElementRef = useRef(null);

    useEffect(() => {
        if (videoElementRef && isLargeTile) {
            let x = videoElementRef.current.getBoundingClientRect().left;
            console.log(x);
            console.log(videoElementRef.current.offsetLeft)
            if (x > 400) {
                if (videoElementRef && isLargeTile) {
                    videoElementRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'start'
                    });
                }
            }
        }
    }, [isLargeTile])

    const handleOnClick = () => {
        setLargeTile(true)
    }

    let innerContent = (
        <React.Fragment>
            <img className="movie-carousel__tile__poster" src={MovieImageURL} alt="Movie Poster"></img>
            <h2 className="movie-carousel__tile__name"> {MovieTitle}</h2>
            <p className="movie-carousel__tile__popularity" > {MoviePopularity} </p>
        </React.Fragment>
    )

    let content = (
        <div
            className={isLargeTile ? "movie-carousel__info-window" : "movie-carousel__tile"}
            onClick={handleOnClick}
            ref={videoElementRef}
        >
            {!isLargeTile ?
                innerContent :
                <MovieInfoWindow
                    MovieTitle={MovieTitle}
                    MoviePopularity={MoviePopularity}
                    MovieImageURL={MovieImageURL}
                    MovieLanguage={MovieLanguage}
                    MovieOverview={MovieOverview}
                ></MovieInfoWindow>}
        </div>
    );




    return content;

}

export default MovieTile;