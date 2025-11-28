import logoPrisme from '/prisme_logo1.svg'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

// fonction qui constitue le header et la navbar avec logo et onglets
export function Header() {

    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <div className='navBar'>
                <Link to="/" className="logoLink">
                    <img src={logoPrisme} className='logoPrisme' alt="logo prisme" />
                </Link>
                <div className='searchBar'>
                </div>
                <nav className='onglets'>
                    <div className="navbar-burger" onClick={toggleMenu}>
                        ☰
                    </div>
                    <ul className={`navbar-list ${isMenuOpen ? 'show' : ''}`}>
                        <li><NavLink to="/" className='btnOnglet'>Accueil</NavLink></li>
                        <li><NavLink to="/articles" className='btnOnglet'>Articles</NavLink></li>
                        <li><NavLink to="/articles/create" className="btnOnglet">Ajouter</NavLink></li>
                        <li><NavLink to="/about" className='btnOnglet'>À propos</NavLink></li>
                        <li><NavLink to="/contact" className='btnOnglet'>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>

        </>
    )
}