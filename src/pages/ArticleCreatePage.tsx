import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleCreatePage.css";
import { toast } from "sonner";

// fonction pour ajouter/créer un nouvel article
export function ArticleCreatePage() {
    const [newArticle, setNewArticle] = useState({ title: "", content: "", image: "" });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    if (isLoading) { return <p>Chargement...</p> }  // Affichage lors du chargement
    if (error) return <p>Erreur : {error}</p>; // Affichage si erreur

    // fonction qui permet au bouton d'enregistrer les data dans le fichier json au moment du click
    function handleSubmit(event: any) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        fetch("http://localhost:3001/articles", {
            method: "POST",
            body: JSON.stringify(newArticle),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Erreur serveur");
                { return res.json() };
            })
            .then((data) => {
                toast("Article créer avec succès.")
                navigate("/articles");
            })

            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }
    return (
        <>
            <h2 className="title-create">Créer un article</h2>
            <form className="form-create">
                <input required className="input-create" type="text" placeholder="Titre" value={newArticle.title} onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })} />
                <textarea required className="input-create" id="area-create" placeholder="Contenu" value={newArticle.content} onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}></textarea>
                <input required className="input-create" type="text" placeholder="URL de l'image" value={newArticle.image} onChange={(e) => setNewArticle({ ...newArticle, image: e.target.value })} />
                <button className="create-btn" onClick={handleSubmit} type="submit">Créer l'article</button>
            </form>
        </>
    )
}