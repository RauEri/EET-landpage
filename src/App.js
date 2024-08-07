import './App.css';
import Header  from './modules/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Banner inicial */}
      <div className='banner-conteiner'>
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



    </div>
  );
}

export default App;
