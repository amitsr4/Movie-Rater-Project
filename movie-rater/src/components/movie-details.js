import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function MovieDetails(props){

    const mov= props.movie;

    return (
        <div>
            { mov ? (
                <div>
                <h1>{mov && mov.title}</h1>
                <p>{mov && mov.description}</p>
                <FontAwesomeIcon icon={solid("star" )} className ={mov.avg_rating > 0 ?'orange' : ""}/>
                <FontAwesomeIcon icon={solid("star" )} className ={mov.avg_rating > 1 ?'orange' : ""}/>
                <FontAwesomeIcon icon={solid("star" )} className ={mov.avg_rating > 2 ?'orange' : ""}/>
                <FontAwesomeIcon icon={solid("star" )} className ={mov.avg_rating > 3 ?'orange' : ""}/>
                <FontAwesomeIcon icon={solid("star" )} className ={mov.avg_rating > 4 ?'orange' : ""}/>
                ({mov.no_of_ratings})
                </div>

            ) : null }
          
        </div>
    )

}

export default MovieDetails;