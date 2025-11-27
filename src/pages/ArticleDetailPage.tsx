
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { Article } from "../components/ArticleThumbnail";
import "./ArticleDetailPage.css";

// fonction pour afficher l'article dans sa page individuellement
export function ArticleDetailPage() {
    const { id } = useParams(); // récupère le paramètre dynamique
    const [articleD, setArticleD] = useState<Article | null>(null);
    const [error, setError] = useState(null);
    const [nbLike, setNbLike] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/articles/${id}`)
            .then(response => response.json())
            .then(data => setArticleD(data))

    }, [id])

    // fonction qui permet de supprimer l'article en question
    function deleteArticle() {
        fetch(`http://localhost:3001/articles/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Impossible de supprimer l’article");
                }
                navigate("/articles");
            })
            .catch((err) => {
                console.error(err);
                setError(
                    err.message || "Une erreur est survenue lors de la suppression"
                );
            })
    }

    if (!articleD) {
        return "Article introuvable."
    }


    return (
        <main className="article-card-detail">
            <div className="content-detail">
                <h2 className='titleCard'>{articleD.title}</h2>
                <img className='img-article-detail' src={articleD.image} alt="toto" />
                <p id="p-detail">{articleD.content}</p><br />
            </div>
            <div className="btn-div">
                <button className='like-btn' onClick={() => setNbLike(!nbLike)}>❤️{nbLike ? 1 : 0}</button>
                <Link to={`/articles/${id}/edit`}>
                    <button className='edit-btn'>Editer l'article</button>
                </Link>
                <button onClick={deleteArticle} className="delete-btn">Supprimer</button>
            </div>
        </main>
    )
}