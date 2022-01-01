
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <div className="container--flex container__app--center">
        <Header />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/general" element={<General />} />
          <Route path="/frontend" element={<Fe />} />
          <Route path="/backend" element={<Be />} />
          <Route path="/interview" element={<Interview />} /> 
          <Route path="/fe/fementor" element={<FeMentor />} />
          <Route path="/fe/hackdesign" element={<Hackdesign />} />
          <Route path="/backend/ccdjango" element={<Ccdjango />} /> */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
