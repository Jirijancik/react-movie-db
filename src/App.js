import React from 'react';
import MainPage from './pages/MainPage';
import { MovieTitleProvider } from './context/MovieTileContext';

function App() {
  return (
    <MovieTitleProvider key={"MovieTitleProvider"}>
      <MainPage key={"MainPage"}></MainPage>
    </MovieTitleProvider>
  );
}

export default App;
