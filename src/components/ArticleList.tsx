import './ArticleThumbnail.css'
import './ArticleList.css'
import { ArticleThumbnail, type Article } from './ArticleThumbnail.tsx'
import { useEffect, useState } from 'react'


export function ArticleList() {
    // const [data, setData] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);
    const [articleData, setArticleData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/articles")
            .then(response => response.json())
            .then(data => setArticleData(data))
    }, [])

    const [searchTerm, setSearchTerm] = useState<string>("");
    const articleFiltred = articleData.filter((articles: Article) => articles.title.includes(searchTerm) ||
        articles.content.includes(searchTerm))

    // if (isLoading) { return <p>Chargement...</p> } // Affichage lors du chargement
    // if (error) return <p>Erreur : {error}</p>; // Affichage si erreur
    // if (!data) return <p>Aucune donnée trouvée.</p>; // Affichage si aucun donnée trouvé

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