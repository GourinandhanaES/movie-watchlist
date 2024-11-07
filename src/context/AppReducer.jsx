export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            };

        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.imdbID !== action.payload) // Changed from id to imdbID
            };

        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watched: [action.payload, ...state.watched],
                watchlist: state.watchlist.filter(
                    (movie) => movie.imdbID !== action.payload.imdbID) // Changed from id to imdbID
            };

        case "MOVE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist],
                watched: state.watched.filter(
                    (movie) => movie.imdbID !== action.payload.imdbID) // Changed from id to imdbID
            };

        case "REMOVE_MOVIE_FROM_WATCHED":
            return {
                ...state,
                watched: state.watched.filter(
                    (movie) => movie.imdbID !== action.payload) // Changed from id to imdbID
            };

        default:
            return state;
    }
};
