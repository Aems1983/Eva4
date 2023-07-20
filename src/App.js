import React, { useState } from 'react';
import './App.css';
import HomeSection from './Components/Home';
import QuienesSomosSection from './Components/quienes_somos';
import HistoriaSection from './Components/History';
import ContactoSection from './Components/Contact';
import CuriosidadesSection from './Components/Curiosidades';
import SeccionLibreSection from './Components/seccion-libre';
import OtrasSection from './Components/Otra';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'quienes-somos':
        return <QuienesSomosSection />;
      case 'historia':
        return <HistoriaSection />;
      case 'contacto':
        return <ContactoSection />;
      case 'curiosidades':
        return <CuriosidadesSection />;
      case 'seccion-libre':
        return <SeccionLibreSection />;
      case 'otra':
        return <OtrasSection />;
      default:
        return null;
    }
  };

  return (
    <div>
      <header>
        <h1>El maravilloso mundo de los perros salchicha: todo lo que debes saber</h1>
        <nav>
          <ul>
            <li
              onClick={() => handleNavigation('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </li>
            <li
              onClick={() => handleNavigation('quienes-somos')}
              className={activeSection === 'quienes-somos' ? 'active' : ''}
            >
              Quienes somos
            </li>
            <li
              onClick={() => handleNavigation('historia')}
              className={activeSection === 'historia' ? 'active' : ''}
            >
              Historia
            </li>
            <li
              onClick={() => handleNavigation('contacto')}
              className={activeSection === 'contacto' ? 'active' : ''}
            >
              Contacto
            </li>
            <li
              onClick={() => handleNavigation('curiosidades')}
              className={activeSection === 'curiosidades' ? 'active' : ''}
            >
              Curiosidades
            </li>
            <li
              onClick={() => handleNavigation('seccion-libre')}
              className={activeSection === 'seccion-libre' ? 'active' : ''}
            >
              Tenencia Responsable
            </li>
            <li
            onClick={() => handleNavigation('otra')}
            className={activeSection === 'otra' ? 'active' : ''}
            >
              Dog's Api
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {renderSection()}
      </main>

      <footer>
        <p>© 2023 Dachshund React Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;