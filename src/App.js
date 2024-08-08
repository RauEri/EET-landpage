import './App.css';
import Header from './modules/header/index.header';
import Nosotros from './modules/nosotrosTarget/index.nosotros';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Banner inicial */}
      <div id='banner-conteiner' className='banner-conteiner'>
        <div className='principal-info'>
          <h1>ESCUELA DE EDUCACION TECNICA N°3132</h1>
          <h4>Ven a aprender con nosotros en nuestra institucion</h4>
          <div className='buttom'>
            <div className='boton-scroll'>
              <a href='#Nosotros'><span>CONOCENOS</span></a>
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


{/* Animacion al scrollear */}
window.addEventListener('scroll', function () {
  const header = this.document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }

  const div = this.document.getElementById('banner-conteiner');
  if (this.window.scrollY > 50) {
    div.classList.add('scroll-banner')
  } else {
    div.classList.remove('scroll-banner')
  }

});
{/* Fin de animacion al scrollear */}

export default App;
