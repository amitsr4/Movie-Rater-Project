import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function MovieDetails(props) {
  const mov = props.movie;

  const [highlighted, setHighlighted] = useState(-1);

  const highlightRate = (high) => (evt) => {
    setHighlighted(high);
  };

  const rateClicked = (rate) => (evt) => { 
    //בזכות ה ` סימן הזה יכולנו להוסיף פרמטר ל fetch
    fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/rate_movie/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 9f5e580e5fa1e43b5a7a48941a7652c7246e1148		",
      },
      body: JSON.stringify({ stars: rate + 1 }),
    })
      .then(() => getDetails())
      .catch((error) => console.log(error))
  };

  const getDetails = () => {
    fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 9f5e580e5fa1e43b5a7a48941a7652c7246e1148		",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => props.updateMovie(resp))  //IMPORTANT- notify the parent to change movie.
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      {mov ? (
        <div>
          <h1>{ mov.title}</h1>
          <p>{mov.description}</p>
          <FontAwesomeIcon
            icon={solid("star")}
            className={mov.avg_rating > 0 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={solid("star")}
            className={mov.avg_rating > 1 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={solid("star")}
            className={mov.avg_rating > 2 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={solid("star")}
            className={mov.avg_rating > 3 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={solid("star")}
            className={mov.avg_rating > 4 ? "orange" : ""}
          />
          ({mov.no_of_ratings})
          <div className="rate-container">
            <h2>Rate it</h2>
            {[...Array(5)].map((e, i) => {
              return (
                <FontAwesomeIcon
                  key={i}
                  icon={solid("star")}
                  className={highlighted > i - 1 ? "purple" : ""}
                  onMouseEnter={highlightRate(i)}
                  onMouseLeave={highlightRate(-1)}
                  onClick={rateClicked(i)}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default MovieDetails;
