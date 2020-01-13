import React, { useState } from 'react'

//Importing Styles
import '../styles/SearchPage';

//Import link from Router-DOM
import { Link } from 'react-router-dom';

//Import Component
import MovieCarousel from '../components/MovieCarousel';

/**
* Search Page: Consists of Search Bar, Home Link and MovieCarousel to display searched Movie
*/
const SearchPage = () => {
    //Initial searched string value
    let searchedString = "";

    // Hook for Value from Input
    const [inputValue, setInputValue] = useState("");
    // Hook for isSearching bool that helps rerender the Movie Carousel Component with search result
    const [isSearching, setIsSearching] = useState(false);
    // Hook for fetched url with Searched Query
    const [searchUrl, setSearchUrl] = useState(`https://api.themoviedb.org/3/search/movie?api_key=98ce4db000fae9862ed2b07152868c56&query=`);

    // On submit handle that managest users query value and mutates search url
    const handleOnSubmit = (e) => {
        e.preventDefault();
        // Spliting searched query string by space and joining with + -> "Red Ruby" = "Red+Ruby"
        searchedString = inputValue.split(' ').join('+');
        // Inserting searched query into Search URL
        setSearchUrl(`https://api.themoviedb.org/3/search/movie?api_key=98ce4db000fae9862ed2b07152868c56&query=${searchedString}`);
        // Apply isSearching = true for needed re-render of MovieCarousel with result movies
        setIsSearching(true);
    }

    // On change handle to store current value in index into state as imputValue
    const handleOnChange = (e) => {
        e.preventDefault();
        setIsSearching(false);
        setInputValue(e.target.value)
    }

    // Defining a content with Movie Carousel Component
    let contentCarousel =
        <MovieCarousel
            carouselTitle="Searched Movies"
            fetchUrl={searchUrl}
            key="Searched Movies"
            id="Searched Movies"
        ></MovieCarousel>;

    // Defining empty content
    let content = <div></div>

    return [
        //Custom Link to navigate back to Home Page
        <div key="SearchPage-HomeLink" className="link-wrapper link-wrapper--with-margin">
            <Link to={process.env.PUBLIC_URL + '/'}>
                <h1 className="custom-underline ">HOME</h1>
            </Link>
        </div>,

        //Form with Search Bar
        <form key="SearchPage-Form" onSubmit={handleOnSubmit} className="search-form">
            <input
                placeholder="Search For A Movie"
                onChange={handleOnChange}
                className="search-input"
            ></input>
        </form>,

        //If user is not searching than Empty context is rendered
        <div  key="SearchPage-EmptyContent">{!isSearching ? content : contentCarousel}</div>
    ];
}

export default SearchPage;