import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeSection from './Components/Home';
import QuienesSomosSection from './Components/quienes_somos';
import HistoriaSection from './Components/History';
import ContactoSection from './Components/Contact';
import CuriosidadesSection from './Components/Curiosidades';
import SeccionLibreSection from './Components/seccion-libre';
import OtrasSection from './Components/Otra';

const App1 = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>El maravilloso mundo de los perros salchicha: todo lo que debes saber</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/quienes-somos">Quienes somos</Link>
                </li>
                <li>
                  <Link to="/historia">Historia</Link>
                </li>
                <li>
                  <Link to="/contacto">Contacto</Link>
                </li>
                <li>
                  <Link to="/curiosidades">Curiosidades</Link>
                </li>
                <li>
                  <Link to="/seccion-libre">Tenencia Responsable</Link>
                </li>
                <li>
                  <Link to="/otra">Dog's Api</Link>
                </li>
              </ul>
            </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/quienes-somos" element={<QuienesSomosSection />} />
            <Route path="/historia" element={<HistoriaSection />} />
            <Route path="/contacto" element={<ContactoSection />} />
            <Route path="/curiosidades" element={<CuriosidadesSection />} />
            <Route path="/seccion-libre" element={<SeccionLibreSection />} />
            <Route path="/otra" element={<OtrasSection />} />
          </Routes>
        </main>

        <footer>
          <p>© 2023 Dachshund React Web. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App1;