
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UsersPage from './UsersPage';
import UserProfilePage from './UserProfilePage';


function App() {
  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <div>
        <header>
          <h1>Couple Squad</h1>
          <nav>
                <Link to="/">Home</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserProfilePage />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; {currentYear} Couple Squad. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;


