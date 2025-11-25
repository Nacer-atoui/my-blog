import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ArticleCreatePage() {
    const [newArticle, setNewArticle] = useState({ title: "", content: "", });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) { return <p>Chargement...</p> }  // Affichage lors du chargement
    if (error) return <p>Erreur : {error}</p>; // Affichage si erreur

    const navigate = useNavigate();

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
                return res.json();
            })
            .then((data) => {
                console.log("Article crée: ", data);
                navigate("/articles");
            })
            
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Titre" value={newArticle.title} onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })} />
            <textarea placeholder="Contenu" value={newArticle.content} onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}></textarea>
            <button type="submit">Créer l'article</button>
        </form>
    )
}