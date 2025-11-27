import logoPrisme from '/prisme_logo1.svg'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

// fonction qui constitue le header et la navbar avec logo et onglets
export function Header() {
    return (
        <>
            <div className='navBar'>
                <Link to="/" className="logoLink">
                    <img src={logoPrisme} className='logoPrisme' alt="logo prisme" />
                </Link>
                <div className='searchBar'>
                </div>
                <nav className='onglets'>
                    <NavLink to="/" className='btnOnglet'>Accueil</NavLink>
                    <NavLink to="/articles" className='btnOnglet'>Articles</NavLink>
                    <NavLink to="/articles/create" className="btnOnglet">Ajouter</NavLink>
                    <NavLink to="/about" className='btnOnglet'>À propos</NavLink>
                    <NavLink to="/contact" className='btnOnglet'>Contact</NavLink>
                </nav>
            </div>

        </>
    )
}