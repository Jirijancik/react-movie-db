import React from 'react';
// Import Component
import MainPage from './pages/MainPage';
// Import Context 
import { MovieTileProvider } from './context/MovieTileContext';

/**
 * App showing data from themoviedb.org via API
 * Contains: Carousell, Movie Tiles, Movie Info Windows, Shaka Player
 * Technology: Mainly are used Funcional Components with hooks and for Movie Tiles is 
 * set up Movie Tile Context providin ID of current active Movie Tile.
 */
function App() {
  return (
    // TODO: Create React Router for separate Search Page

    //Main Page with Context
    <MovieTileProvider key={"MovieTileProvider"}>
      <MainPage key={"MainPage"}></MainPage>
    </MovieTileProvider>
  );
}

export default App;
