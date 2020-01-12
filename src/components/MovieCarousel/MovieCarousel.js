import React from 'react'

//Importing Comoponents
import MovieTile from '../MovieTile'

//Importing Styles
import '../../styles/MovieCarousel'

//Importing Hooks
import { useHttp } from '../../hooks/http'

/* 
* A Carousel component is filled with "Movie Tiles". Horizontal scroll is done by direction buttons. 
* Amount of Movies displayed is determined by 'fetchItems' value.
*/
const MovieCarousel = ({ carouselTitle, fetchItems, fetchUrl, handleOnWheel , id}) => {

    //Hook for initial Fetch of data and storage 
    const [isloading, fetchedData] = useHttp(
        fetchUrl, []
    )

    // Initial value for loaded movies
    let loadedMovies = null;

    // Logic for populating loadedMovies var. by Movie Tiles with fetched data
    if (fetchedData) {

        //fetchedData has movie results stored in fetchedData.results 
        const data = fetchedData.results;
        
        //Cutting results arr with length given in comp. props
        data.length = fetchItems;

        //Mapping over fetchedData and storing MovieTitles into loadedMovies
        loadedMovies = data.map(movie => {
            return (
                <MovieTile
                    /*
                    MovieTitle will store either "Movie Name" or "Show Name" due to difference
                    in provided data from TheMovieDB  
                    */
                    MovieTitle={movie.original_title ? movie.original_title : movie.original_name}
                    MovieImage={movie.poster_path}
                    MoviePopularity={movie.popularity}
                    MovieLanguage={movie.original_language}
                    MovieOverview={movie.overview}

                    id={movie.id + " " + carouselTitle}
                    key={movie.id + " " + carouselTitle}
                ></MovieTile>
            )
        })
    }

    //Content
    let content = <p className="movie-carousel" key={id + " Loading"}>Loading Movies...</p>;

    //If data are loaded and loadedMovies are not emplty, then list of MovieTiles will be displayed
    if (!isloading && loadedMovies) {
        content = [
            <h2 className = "movie-carousel__title" key={id + " Title"}>{carouselTitle}</h2>,

            <div
                className="movie-carousel"
                onWheel={handleOnWheel}
                tabIndex={0}
                key={id + " Wrapper"}
            >
                <button
                    className="movie-carousel__button movie-carousel__button--left"
                    onClick = {e => e.target.parentElement.scrollLeft -=450}
                    aria-label='Move To Left'
                    key={id + " Left"}
                >{"<"}</button>

                {loadedMovies}

                <button
                    className="movie-carousel__button movie-carousel__button--right"
                    onClick = {e => e.target.parentElement.scrollLeft +=450}
                    aria-label='Move To Right'
                    key={id + " Right"}
                >{">"}</button>
            </div>
        ]
    } else if (!isloading && !loadedMovies) {
        //If data are no longer loading yet loadedMovies are empty err will be shown
        content = <p className="movie-carousel" key={id+" Failed to fetch character"}>Failed to fetch character.</p>;
    }

    //Returning Content
    return content;

}

export default MovieCarousel;