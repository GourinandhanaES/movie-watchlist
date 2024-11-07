import React from 'react';
import { Link } from 'react-router-dom';
import movieImg from '../components/movie.png';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <img className='movImg' src={movieImg} alt="" />
                    </div>
                    <h1 className='titlem'>Discover, Watch, Repeat</h1>

                    <ul className="nav-links">
                        <li className='titlen'>
                            <Link to="/" className='btn' >Watchlist</Link>
                        </li>

                        <li className='titlen'>
                            <Link to="/watched" className="btn">Watched</Link>
                        </li>

                        <li className='titlen'>
                            <Link to="/add" className="btn">Add</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
