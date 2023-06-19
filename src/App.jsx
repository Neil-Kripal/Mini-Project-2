import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Project/Routes';

function App() {
  return (
    <div >
      <Router>
        <div>
          <AppRouter />
        </div>
      </Router>
    </div>
  );
}

export default App;
