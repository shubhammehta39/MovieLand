// // import logo from './logo.svg';
// import { /*useEffect ,*/ useState } from 'react';
// import './App.css';

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   //  useEffect(() => {
//   // setCounter(100);
//   //alert(" you have changed the counter to" + counter);
//   // }, []);//yaha [] ya [counnter]sirf khali rakhunga toh better hai nice ui experience
//   return (
//     <div className="App">
//       <button onClick={() => setCounter((prevCount => prevCount - 1))}> - </button>
//       <h1> {counter}</h1>
//       <button onClick={() => setCounter((prevCount => prevCount + 1))}> + </button>
//     </div>
//   );
// }
//export default App;
/*
<!--

import React, { useState, useEffect } from "react";
import moviecard from "./moviecard";


import './App.css';
import SearchIcon from './search.svg';

// b8719bdc
const API_URL = "http://www.omdbapi.com?apikey=b8719bdc";
// const movie =
// {
//   "Title": "Interstellar",
//   "Year": "2005",
//   "imdbID": "tt0758429",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMTgyNzUyMTQ3OV5BMl5BanBnXkFtZTgwNDg0OTE2MzE@._V1_SX300.jpg"
// }

const App = () => {
  const [movie, setmovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchMovies("Batman");
  }, []);


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setmovies(data.Search);
  };

  // useEffect(() => {
  //   searchMovies('interstellar');


  return (
    <div className="app">
      < h1 > MovieLand </h1 >

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        // placeholder="Search for thre Movies"
        // value="Interstellar"
        // onChange={() => { }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        // onClick={() => { }}
        />
      </div>


      {movie?.length > 0 ? (
        <div className="container">
          {movie.map((movie) => (
            <moviecard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};


export default App; --> */

import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;


