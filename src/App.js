import './App.css';
import Header from './modules/header/index.header';
import Nosotros from './modules/nosotrosTarget/index.nosotros';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Animación al hacer scroll
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      const div = document.getElementById('banner-conteiner');
      if (window.scrollY > 50) {
        div.classList.add('scroll-banner');
      } else {
        div.classList.remove('scroll-banner');
      }
    };
    // Fin de la animacion al hacer scroll

    window.addEventListener('scroll', handleScroll);

    // Animación de desplazamiento suave
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    // Fin de la animacion de desplazamiento suave

    // Limpieza de eventos al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    };
  }, []);
    // fin de la limpieza de eventos al desmontar
    
  return (
    <div className="App">
      <Header />

      {/* Banner inicial */}
      <div id='banner-conteiner' className='banner-conteiner'>
        <div className='principal-info'>
          <h1>ESCUELA DE EDUCACION TECNICA N°3132</h1>
          <h4>Ven a aprender con nosotros en nuestra institución</h4>
          <div className='buttom'>
            <div className='boton-scroll'>
              <a href='#Nosotros'><span>CONÓCENOS</span></a>
            </div>
          </div>
        </div>
      </div>
      {/* Fin del banner inicial */}

      <div className='nosotros' id='Nosotros'>
        <div className='divisor'>
          <div className='top-info'>
            <span>Nosotros</span>
          </div>
        </div>

        <Nosotros />
      </div>

      <div className='test'></div>
    </div>
  );
}

export default App;
