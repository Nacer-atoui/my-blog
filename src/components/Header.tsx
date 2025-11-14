import logoPrisme from '/prisme_logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <>
            <div className='navBar'>
                <img src={logoPrisme} className='logoPrisme' alt="logo prisme" />
                <div className='searchBar'>
                <input type="text" className='search' placeholder='Rechercher'/>
                {/* <button className='btnSearch' type='submit'>🔎</button> */}
                </div>
                <nav className='onglets'>
                    <NavLink to="/HomePage" className='btnOnglet'>Accueil</NavLink>
                    <NavLink to="/ArticlePage" className='btnOnglet'>Articles</NavLink>
                    <NavLink to="/About" className='btnOnglet'>À propos</NavLink>
                    <NavLink to="/Contact0" className='btnOnglet'>Contact</NavLink>
                </nav>
            </div>

        </>
    )
}