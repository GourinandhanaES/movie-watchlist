import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated Switch to Routes
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add';
import './App.css';
import './lib/font-awesome/css/all.min.css';

import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <div className="movie-page">
      <Router>
        <Header />

        <Routes> {/* Changed Switch to Routes */}
          <Route exact path="/" element={<Watchlist />} /> {/* Updated Route */}
          <Route path="/watched" element={<Watched />} /> {/* Updated Route */}
          <Route path="/add" element={<Add />} /> {/* Updated Route */}
        </Routes>
      </Router>
      </div>
    </GlobalProvider>
  );
};

export default App;

