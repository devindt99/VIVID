import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import your components
import FeelingsManagerPage from './pages/FeelingsManagerPage/FeelingsManagerPage';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FeelingDurationChange from './components/FeelingDurationChange/FeelingDurationChange';
function App() {
  return (
    <Router>
      <div>
      <Header/>
      <FeelingDurationChange/>
        <Routes>
          <Route path="/" element={<FeelingsManagerPage />} />

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
