
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import General from './components/general/General';
import Codewars from './components/general/codewars/Codewars';
import Fe from './components/fe/Fe.js';
import FeMentor from './components/fe/feMentor/FeMentor';
import Be from './components/be/Be';
import CcDjango from "./components/be/ccdjango/CcDjango";
import Interview from './components/interview/Interview';
import Algo from './components/interview/algo/Algo';

function App() {
  return (
    <div className="App">
      <div className="container--flex container__app--center">
        <Header />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/general" element={<General />} />
          <Route path="/general/codewars" element={<Codewars />} />
          <Route path="/frontend" element={<Fe />} />
          <Route path="/fe/fementor" element={<FeMentor />} />
          <Route path="/backend" element={<Be />} />
          <Route path="/backend/ccdjango" element={<CcDjango />} />
          <Route path="/interview" element={<Interview />} /> 
          <Route path='/interview/algo' element={<Algo />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
