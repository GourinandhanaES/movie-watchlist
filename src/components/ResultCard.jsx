import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ResultCard = ({ movie }) => {
    const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.imdbID === movie.imdbID);
    let storedMovieWatched = watched.find(o => o.imdbID === movie.imdbID);

    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
    const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.Poster && movie.Poster !== "N/A" ? (
                    <img 
                        src={movie.Poster} 
                        alt={`${movie.Title} Poster`} 
                    />
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.Title}</h3><br />
                    <h4 className="release-date">
                        {movie.Year ? movie.Year : `-_-`}
                    </h4>
                </div>

                <div className="controls">
                    <button 
                        className="btn"
                        disabled={watchlistDisabled}
                        onClick={() => addMovieToWatchlist(movie)}
                    >
                        Add to Watchlist
                    </button>

                    <button 
                        className="btn"
                        disabled={watchedDisabled}
                        onClick={() => addMovieToWatched(movie)}
                    >
                        Add to Watched
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ResultCard;

