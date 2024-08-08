import './header.style.css'
import logo from '../../assets/img/logo_normal.png'

export default function Header() {
    return (
        <header id='header'>
            <nav className="main-navigation">
                <a href='#'>
                    <div className='site-logo'>
                        <img src={logo} className='logo' alt='Logo' />
                        <h3>EET N°3132</h3>
                    </div>
                </a>
                <div className='main-menu'>
                    <ul className='main-list'>
                        <li><a href="#banner-conteiner" className="nav-link">Inicio</a></li>
                        <li><a href="#Nosotros" className="nav-link">Nosotros</a></li>
                        <li><a href="#Orientacion" className="nav-link">Orientacion</a></li>
                        <li><a href="#Noticias" className="nav-link">Noticias</a></li>
                        <li><a href="#Contacto" className="nav-link">Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}