import logoPrisme from '/prisme_logo.svg'
import './Header.css'

export function Header() {
    return (
        <>
            <div className='navBar'>
                <img src={logoPrisme} className='logona' alt="logo nacer" />
                
                <div className='onglets'>
                    <a className='btnOnglet'>Accueil</a>
                    <a className='btnOnglet'>Articles</a>
                    <a className='btnOnglet'>Contact</a>
                </div>
            </div>

        </>
    )
}