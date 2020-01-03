import React from 'react'

import MovieTitle from '../MovieTile'

import '../../styles/MovieCarousel'

import { useHttp } from '../../hooks/http'

const MovieCarousel = ({fetchUrl}) => {

    
   

    const [isloading, fetchedData] = useHttp(
        fetchUrl, []
    )

    let loadedMovies = null;


    if (fetchedData) {
        const data = fetchedData.results;
        data.length= 5;
        loadedMovies = data.map(movie => {
            return(
                <MovieTitle
                    MovieTitle={movie.title}
                    MovieImage={movie.poster_path}
                    MoviePopularity={movie.popularity}
                    key={movie.id}
                ></MovieTitle>
            )
        })
    }


    let content = <p className="movie-carousel">Loading Movies...</p>;



    if (!isloading && loadedMovies) {
        content = (
            <div className="movie-carousel"> {loadedMovies}</div>
        )
        console.log(fetchedData.results)
    } else if (!isloading && !loadedMovies) {
        content = <p className="movie-carousel">Failed to fetch character.</p>;
    }
    return content;

}

export default MovieCarousel;