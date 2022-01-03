
import './App.css';
import { useState } from 'react';
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

const text = "Welcome to the Masters Bootcamp resources page!"

function App() {

  const [route, setRoute] = useState(text);

  return (
    <div className="App">
      <div className="container--flex container__app--center">
        <Header />
        <Routes>
          <Route path="/" element={<Menu route={route} setRoute={setRoute} />} />
          <Route path="/about" element={<About route={route} setRoute={setRoute} text={text}/>} />
          <Route path="/general" element={<General route={route} setRoute={setRoute} text={text}/>} />
          <Route path="/general/codewars" element={<Codewars route={route} setRoute={setRoute} text={text}/>} />
          <Route path="/frontend" element={<Fe route={route} setRoute={setRoute} text={text}/>} />
          <Route path="/fe/fementor" element={<FeMentor route={route} setRoute={setRoute} text={text}/>} />
          <Route path="/backend" element={<Be route={route} setRoute={setRoute} text={text}/>} />
          <Route path="/backend/ccdjango" element={<CcDjango route={route} setRoute={setRoute} text={text}/>} />
          <Route path="/interview" element={<Interview route={route} setRoute={setRoute} text={text}/>} /> 
          <Route path='/interview/algo' element={<Algo route={route} setRoute={setRoute} text={text}/>} />
        </Routes>
        <Footer route={route}/>
      </div>
    </div>
  );
}

export default App;
