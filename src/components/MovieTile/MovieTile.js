import React, { useState, useEffect, useRef, useContext } from 'react'

//Importing Components
import MovieInfoWindow from '../MovieInfoWindow/MovieInfoWindow';

//Importing Context
import { MovieTitleContext } from '../../context/MovieTileContext';

//Importing Image
import MovieImageNotFound from '../../images/ImageNotFound.jpg'

//Importing Styles
import '../../styles/MovieTile'

/**
 * Movie Tile component displays movie posters with a popularity raiting. On hover you can see Movie Title. 
 * Movie Tile should on click: scroll into view and enlarge itself into Movie Info Window. It should be able
 * to close other current opened Movie Info Window in its process. 
 */
const MovieTile = ({ MovieTitle, MoviePopularity, MovieImage, MovieLanguage, MovieOverview, id }) => {

    //Hook for large window indicator 
    const [isLargeTile, setIsLargeTile] = useState(false);
    //Context for current active Movie Tile ID
    const [tileStateId, setTileStateId] = useContext(MovieTitleContext);

    //URL for Movie Tile - using fetched data and tmdb.org url with movie posters
    const MovieImageURL = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${MovieImage}`;


    const videoElementRef = useRef(null);

    //Logic to after click scroll enlarged tile into view only after the isLargeTile is changed to true
    useEffect(() => {
        if (videoElementRef && isLargeTile) {
            videoElementRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        }
    }, [isLargeTile])

    /* 
    * Logic to close enlarged Movie Tile after clicking on another Tile
    * handle compares Stored Tile ID (tileStateId) with Current Tile Id (given in props)
    */
    const handleOnClick = () => {
        if (tileStateId !== id) {
            //First tile to be clicked
            setIsLargeTile(true);
            setTileStateId(id);
        } else if (tileStateId === id) {
            //Clicking on same Tile
            return
        } else {
            //Clicking on different Tile -> close current tile and reset state
            setTileStateId(null);
            setIsLargeTile(false);
        }
    }

    //Content for regular Tile
    let smallTileContent = (
        <React.Fragment>
            <img className="movie-carousel__tile__poster"

                //If image is not avalible, a backup imamge will be provided
                src={MovieImage ? MovieImageURL : MovieImageNotFound}
                alt="Movie Poster"
                tabIndex={0}

            ></img>
            <h2 className="movie-carousel__tile__name"> {MovieTitle}</h2>
            <p className="movie-carousel__tile__popularity" > {MoviePopularity} </p>
        </React.Fragment>
    )

    let content = (
        //Wrapper around Tile that can adjust size
        <div
            className={(isLargeTile && tileStateId === id) ? "movie-carousel__info-window" : "movie-carousel__tile"}
            onClick={handleOnClick}
            ref={videoElementRef}

            key={MoviePopularity + id}
        >
            {
                //Rendering either regular Tile or Movie Info Window
                !(isLargeTile && tileStateId === id) ?
                    smallTileContent :
                    <MovieInfoWindow
                        MovieTitle={MovieTitle}
                        MoviePopularity={MoviePopularity}
                        MovieImageURL={MovieImageURL}
                        MovieLanguage={MovieLanguage}
                        MovieOverview={MovieOverview}

                        id={id}
                        key={"MIW" + id}
                    ></MovieInfoWindow>
            }
        </div>
    );

    //Returning Content
    return content;
}

export default MovieTile;