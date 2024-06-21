import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
//import Home from './Components/Home/Home';

function App() {
  return (
      <Router>
    <div className="App">
        {/*<Navbar /> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          </Routes>
       {/* <Footer /> */}
    </div>
      </Router>
  );
}

export default App; 