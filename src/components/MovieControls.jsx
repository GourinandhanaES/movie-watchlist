import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

const MovieControls = ({ movie, type }) => {
    const { removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched } = useContext(GlobalContext);

    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <>
                    <button className="ctrl-btn"
                        onClick={() => addMovieToWatched(movie)}
                    >
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button className="ctrl-btn"
                        onClick={() => removeMovieFromWatchlist(movie.imdbID)}
                    >
                        <i className="fa-fw fa fa-trash"></i>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button className="ctrl-btn"
                        onClick={() => moveToWatchlist(movie)}
                    >
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>

                    <button className="ctrl-btn"
                        onClick={() => removeFromWatched(movie.imdbID)}
                    >
                        <i className="fa-fw fa fa-trash"></i>
                    </button>
                </>
            )}
        </div>
    );
};

export default MovieControls;
