import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <ul>
        <li>
          <Link to="/task1">Task 1</Link>
        </li>
        {/* Add links for other tasks */}
      </ul>
    </div>
  );
};

export default Home;
