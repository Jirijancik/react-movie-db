import React, { useState, useEffect, useRef, useContext } from 'react'

import '../../styles/MovieTile'
import MovieInfoWindow from '../MovieInfoWindow/MovieInfoWindow';
import { MovieTitleContext } from '../../context/MovieTileContext';


const MovieTile = ({ MovieTitle, MoviePopularity, MovieImage, MovieLanguage, MovieOverview, id }) => {

    const [isLargeTile, setIsLargeTile] = useState(false);
    const [tileStateId, setTileStateId] = useContext(MovieTitleContext);

    const MovieImageURL = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${MovieImage}`

    const videoElementRef = useRef(null);


    useEffect(() => {
        if (videoElementRef && isLargeTile) {
            let x = videoElementRef.current.getBoundingClientRect().left;
            if (x > 400) {
                if (videoElementRef && isLargeTile) {
                    videoElementRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                }
            }
        }
    }, [isLargeTile])

    const handleOnClick = () => {
      
        if(tileStateId !== id){
            
            setIsLargeTile(true);
            setTileStateId(id);
        }else if(tileStateId=== id){
            return
        }else{
            setTileStateId(null);
            setIsLargeTile(false);
        }
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
            className={(isLargeTile && tileStateId === id) ? "movie-carousel__info-window" : "movie-carousel__tile"}
            onClick={handleOnClick}
            ref={videoElementRef}

            key={MoviePopularity + id}
        >
            {!(isLargeTile && tileStateId === id)  ?
                innerContent :
                <MovieInfoWindow
                    MovieTitle={MovieTitle}
                    MoviePopularity={MoviePopularity}
                    MovieImageURL={MovieImageURL}
                    MovieLanguage={MovieLanguage}
                    MovieOverview={MovieOverview}

                    id={id}
                    key={"MIW" + id}
                ></MovieInfoWindow>}
        </div>
    );

    return content;
}

export default MovieTile;