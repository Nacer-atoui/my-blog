import './ArticleThumbnail.css'
import './ArticleList.css'
import { ArticleThumbnail, type Article } from './ArticleThumbnail.tsx'
import { useEffect, useState } from 'react'

// fonction pour importer la liste des articleThumbnail
export function ArticleList() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [articleData, setArticleData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/articles")
            .then(response => response.json())
            .then(data => setArticleData(data))
            .catch((err) => {
                console.error(err);
                setError(
                    err.message || "Une erreur est survenue lors de la récupération des articles"
                );
            })
    }, [])

    // barre de recherche avec recherche instantanée.
    const [searchTerm, setSearchTerm] = useState<string>("");
    const articleFiltred = articleData.filter((articles: Article) => articles.title.includes(searchTerm))

    // conditions et messages d'erreurs
    if (isLoading) { return <p>Chargement...</p> } // Affichage lors du chargement
    if (error) return <p>Erreur : {error}</p>; // Affichage si erreur
    if (!articleData) return <p>Aucune donnée trouvée.</p>; // Affichage si aucun donnée trouvé

    return (
        <>
            <input type="text" className='search' placeholder='Rechercher' onChange={(event) => setSearchTerm(event.target.value)} />
            <div className='containList'>
                {articleFiltred.map((articles: Article) => (
                    <ArticleThumbnail
                        key={articles.id}
                        id={articles.id}
                        title={articles.title}
                        image={articles.image}
                        content={articles.content}
                    />
                ))}
            </div>
        </>
    )
}