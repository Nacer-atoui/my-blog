import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import type { Article } from "../components/ArticleThumbnail";
import "./UpdateArticlePage.css";
import { toast } from "sonner";

// fonction qui permet de mettre à jour ou modifier un article
export default function UpdateArticlePage() {
    const { id } = useParams();
    const [article, setArticle] = useState<Article | null>(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) { return <p>Chargement...</p> }  // Affichage lors du chargement
    if (error) return <p>Erreur : {error}</p>; // Affichage si erreur

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/articles/${id}`)
            .then((res) => res.json())
            .then((data) => setArticle(data))
    }, [id]);

    // fonction permettant d'effectuer la mis à jour lors du click
    function handleSubmit(e: any) {
        e.preventDefault();

        fetch(`http://localhost:3001/articles/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article)
        })
            .then((res) => {
                if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
                toast("Article modifié avec succès.")
                navigate("/articles");
            })

            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }

    if (!article) return <p>Aucune donnée trouvée.</p>;

    return (
        <>
            <h2 className="title-edit">Modifier l'article</h2>
            <form onSubmit={handleSubmit} className="form-update">
                <label htmlFor="title">Titre</label>
                <input
                    className="input-edit"
                    name="title"
                    value={article.title}
                    onChange={(e) =>
                        setArticle({ ...article, title: e.target.value })
                    }
                />
                <label htmlFor="content">Contenu de l'article</label>
                <textarea
                    className="input-edit"
                    id="content-edit"
                    name="content"
                    value={article.content}
                    onChange={(e) =>
                        setArticle({ ...article, content: e.target.value })
                    }
                />
                <label htmlFor="image">URL de l'image</label>
                <input
                    className="input-edit"
                    name="image"
                    value={article.image}
                    onChange={(e) =>
                        setArticle({ ...article, image: e.target.value })
                    }
                />
                <button type="submit" className="edit-btn" id="btn-edit-page">Editer l'article</button>
            </form>
        </>
    );
}
