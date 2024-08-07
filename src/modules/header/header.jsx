import './header.style.css'
import logo from '../../assets/img/logo_normal.png'

export default function Header() {
    return (
        <header>
            <nav className="main-navigation">
                <a href='#'>
                    <div className='site-logo'>
                        <img src={logo} />
                    </div>
                    <h3>EET N°3132</h3>
                </a>
            </nav>
        </header>
    )
}