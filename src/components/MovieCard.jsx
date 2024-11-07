import React from 'react';
import MovieControls from './MovieControls';

const MovieCard = ({ movie, type }) => {
    return (
        <div className="movie-card">
            <div className="overlay"></div>

            {/* Update to use movie.Poster from OMDB API */}
            {movie.Poster && movie.Poster !== "N/A" ? (
                <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            ) : (
                <div className="filler-poster"></div>
            )}

            <MovieControls movie={movie} type={type} />
        </div>
    );
}

export default MovieCard;
