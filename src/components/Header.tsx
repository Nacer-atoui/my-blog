import logoPrisme from '/prisme_logo.svg'
import './Header.css'

export function Header() {
    return (
        <>
            <div className='navBar'>
                <img src={logoPrisme} className='logoPrisme' alt="logo prisme" />
                <div className='searchBar'>
                <input type="text" className='search' placeholder='Rechercher'/>
                {/* <button className='btnSearch' type='submit'>🔎</button> */}
                </div>
                <div className='onglets'>
                    <button className='btnOnglet'>Accueil</button>
                    <button className='btnOnglet'>Articles</button>
                    <button className='btnOnglet'>Contact</button>
                </div>
            </div>

        </>
    )
}