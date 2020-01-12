import React from 'react';
// Import Component
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
// Import Context 
import { MovieTileProvider } from './context/MovieTileContext';
//Import Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


/**
 * App showing data from themoviedb.org via API
 * Contains: Carousell, Movie Tiles, Movie Info Windows, Shaka Player, SearchPage
 * Technology: Mainly are used Funcional Components with hooks and for Movie Tiles is 
 * set up Movie Tile Context providin ID of current active Movie Tile.
 * For Route there is used "process.env.PUBLIC_URL" so it works in developpement as well as in GitHub-Pages
 */
function App() {
  return (   
    <Router>
      <Switch>
        <MovieTileProvider key={"MovieTileProvider"}>
        
          <Route path={process.env.PUBLIC_URL + '/'} exact component={MainPage} />
          <Route path={process.env.PUBLIC_URL + '/search'} component={SearchPage} />

        </MovieTileProvider>
      </Switch>
    </Router>
  );
}

export default App;
