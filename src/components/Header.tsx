import logoPrisme from '/prisme_logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <>
            <div className='navBar'>
                <NavLink to="/HomePage" className="logoLink"><img  src={logoPrisme} className='logoPrisme' alt="logo prisme" /></NavLink>
                <div className='searchBar'>
                {/* <button className='btnSearch' type='submit'>🔎</button> */}
                </div>
                <nav className='onglets'>
                    <NavLink to="/HomePage" className='btnOnglet'>Accueil</NavLink>
                    <NavLink to="/ArticlePage" className='btnOnglet'>Articles</NavLink>
                    <NavLink to="/ArticleCreatePage" className="btnOnglet">Ajouter un article</NavLink>
                    <NavLink to="/About" className='btnOnglet'>À propos</NavLink>
                    <NavLink to="/Contact" className='btnOnglet'>Contact</NavLink>
                </nav>
            </div>

        </>
    )
}