import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '0 10px' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/about">About</Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;