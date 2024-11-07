import React, { useState } from 'react';
import ResultCard from './ResultCard';

const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = e => {
        e.preventDefault();

        const value = e.target.value;
        setQuery(value);

        if (value) {
            fetch(`https://www.omdbapi.com/?apikey=d6553e86&t=${value}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.Response === "True") {
                        setResults([data]); 
                    } else {
                        setResults([]);
                    }
                });
        } else {
            setResults([]); 
        }
    }

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Search movie"
                            value={query}
                            onChange={onChange}
                        />
                    </div>
                    {results.length > 0 && (
                        <ul className="results">
                            {results.map(movie => (
                                <li key={movie.imdbID}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Add;


