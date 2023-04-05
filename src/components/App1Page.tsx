import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

export const App1Page: React.FC = () => {
  return (
    <div>
      <h1>Application 1</h1>
      <nav>
        <ul>
          <li>
            <Link to="child1">App Child 1</Link>
          </li>
          <li>
            <Link to="child2">App Child 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="child1" element={<div>App child1 content</div>} />
        <Route path="child2" element={<div>App child2 content</div>} />
      </Routes>
    </div>
  );
};

export default App1Page;
