import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages';


function App() {
  return (
    <Router>
     <Routes>
        <Route path='/ciri-ryan' element={<HomePage />} />
     </Routes>
     </Router>
  );
};

export default App;
