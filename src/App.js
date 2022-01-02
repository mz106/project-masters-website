
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

function App() {
  return (
    <div className="App">
      <div className="container--flex container__app--center">
        <Header />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/general" element={<General />} />
          <Route path="/frontend" element={<Fe />} />
          <Route path="/fe/fementor" element={<FeMentor />} />
          {/* <Route path="/backend" element={<Be />} />
          <Route path="/interview" element={<Interview />} /> 
          
          <Route path="/fe/hackdesign" element={<Hackdesign />} />
          <Route path="/backend/ccdjango" element={<Ccdjango />} /> */}
          <Route path="/general/codewars" element={<Codewars />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
