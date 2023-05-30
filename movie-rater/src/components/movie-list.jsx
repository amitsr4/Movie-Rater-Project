import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { API } from "../api-service";
import { useCookies } from "react-cookie";

function MovieList(props) {
  const [token] = useCookies(["movie-token"]);

  const movieClicked = (movie) => (evt) => {
    props.movieClicked(movie, token["movie-token"]);
  };
  const editClicked = (movie) => {
    props.editClicked(movie, token["movie-token"]);
  };
  const removeClicked = (movie) => {
    if (window.confirm("Are you sure you want to delete it?")) {
      API.deleteMovie(movie.id, token["movie-token"])
        .then(() => props.removeClicked)
        .catch((error) => console.log());
      props.removeClicked(movie);
    }
  };
  return (
    <div>
      {props.movies &&
        props.movies.map((movie) => {
          return (
            <div key={movie.id} className="movie-item">
              <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => editClicked(movie)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => removeClicked(movie)}
              />
            </div>
          );
        })}
    </div>
  );
}

export default MovieList;
