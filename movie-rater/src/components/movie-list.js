import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function MovieList(props) {
  const movieClicked = (movie) => (evt) => {
    props.movieClicked(movie);
  };
  const editClicked = (movie) => {
    props.editClicked(movie);
  };

  return (
    <div>
      {props.movies &&
        props.movies.map((movie) => {
          return (
            <div key={movie.id} className="movie-item">
              <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
              <FontAwesomeIcon
                icon={regular("Edit")}
                onClick={() => editClicked(movie)}
              />
              <FontAwesomeIcon icon={solid("Trash")} />
            </div>
          );
        })}
    </div>
  );
}

export default MovieList;
