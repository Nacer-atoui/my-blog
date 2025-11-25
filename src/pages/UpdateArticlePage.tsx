import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import type { Article } from "../components/ArticleThumbnail";

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

    function handleSubmit(e: any) {
        e.preventDefault();

        fetch(`http://localhost:3001/articles/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article)
        })
            .then((res) => {
                if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
                navigate("/articles");
            })

            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }

    if (!article) return <p>Aucune donnée trouvée.</p>;

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                value={article.title}
                onChange={(e) =>
                    setArticle({ ...article, title: e.target.value })
                }
            />
            <input
                name="content"
                value={article.content}
                onChange={(e) =>
                    setArticle({ ...article, content: e.target.value })
                }
            />
            <input
                name="image"
                value={article.image}
                onChange={(e) =>
                    setArticle({ ...article, image: e.target.value })
                }
            />
            <button type="submit">Editer l'article</button>
        </form>
    );
}
