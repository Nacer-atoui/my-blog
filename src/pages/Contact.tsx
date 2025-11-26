import "./Contact.css";

export function Contact() {
    return (
        <>
            <div className="div-contact">
                <h2 className="title-contact">Contactez-nous</h2>
                <form className="form-contact">
                    <input className="input-contact" type="text" placeholder="Nom" />
                    <input className="input-contact" type="text" placeholder="Prénom" />
                    <input className="input-contact" type="text" placeholder="e-mail" />
                    <textarea className="input-contact" id="area-contact" placeholder="Votre message..." />
                    <button type="submit" className="contact-btn">Envoyer</button>
                </form>
            </div>
        </>
    )
}