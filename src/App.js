import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import News from './Components/News';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="Content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;