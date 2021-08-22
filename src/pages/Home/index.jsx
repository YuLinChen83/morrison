import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <h1>Frontend Before Interview Test</h1>
    <nav>
      <ul>
        <li>
          <Link to="/css">Layout version 1 (Flex)</Link>
        </li>
        <li>
          <Link to="/css2">Layout version 2 (Grid)</Link>
        </li>
        <li>
          <Link to="/hook">Press shift to select checkboxed (Hook)</Link>
        </li>
        <li>
          <Link to="/crud">Common API CRUD example</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Home;
