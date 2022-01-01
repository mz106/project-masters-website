
import './App.css';

import { Routes, Route, BrowserRouter as Router, useLocation, Link } from 'react-router-dom';

import Header from './components/header/Header';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <div className="container--flex container__app--center">
        <Header />
        <Routes>
          <Route path="/" element={<Menu />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/general" element={<General />} />
          <Route path="/frontend" element={<Fe />} />
          <Route path="/backend" element={<Be />} />
          <Route path="/interview" element={<Interview />} /> 
          <Route path="/fe/fementor" element={<FeMentor />} />
          <Route path="/fe/hackdesign" element={<Hackdesign />} />
          <Route path="/backend/ccdjango" element={<Ccdjango />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
