import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./components/movie-list";
import MovieDetails from "./components/movie-details";
import MovieForm from "./components/movie-form";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);
  const [token, setToken, deleteToken] = useCookies(["movie-token"]);
  const [data, loading, error] = useFetch(); // my custom hook

  useEffect(() => {
    setMovies(data);
  }, [data]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token["movie-token"]} 		`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setMovies(resp))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (!token["movie-token"]) window.location.href = "/";
  }, [token]);

  const loadMovie = (movie) => {
    setSelectedMovie(movie);
    setEditedMovie(null);
  };

  const editClicked = (movie) => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  };

  const updatedMovie = (movie) => {
    const newMovie = movies.map((mov) => {
      if (mov.id === movie.id) {
        return movie;
      }
      return mov;
    });
    setMovies(newMovie);
  };

  const newMovie = () => {
    setEditedMovie({ title: "", description: "" });
    setSelectedMovie(null);
  };

  const MovieCreated = (movie) => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
  };

  const removeClicked = (movie) => {
    const newMovies = movies.filter((mov) => mov.id !== movie.id);
    setMovies(newMovies);
  };

  const logoutUser = () => {
    deleteToken(["movie-token"]);
  };

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error loading movies...</h1>
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {" "}
          <FontAwesomeIcon icon={faFilm} />
          <span>Movie rater</span>
        </h1>
        <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser} />
      </header>
      <div className="layout">
        <div>
          <MovieList
            movies={movies}
            movieClicked={loadMovie}
            editClicked={editClicked}
            removeClicked={removeClicked}
          />
          <button onClick={newMovie}> New Movie</button>
        </div>
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie} />
        {editedMovie ? (
          <MovieForm
            movie={editedMovie}
            updatedMovie={updatedMovie}
            MovieCreated={MovieCreated}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
