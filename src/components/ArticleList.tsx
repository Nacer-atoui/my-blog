import './ArticleThumbnail.css'
import './ArticleList.css'
import { Link } from 'react-router-dom'
import { ArticleThumbnail, type Article } from './ArticleThumbnail.tsx'
import { useEffect, useState } from 'react'


export function ArticleList() {
    const [articleData, setArticleData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/articles")
            .then(response => response.json())
            .then(data => setArticleData(data))
    }, [])

    const [searchTerm, setSearchTerm] = useState<string>("");
    const articleFiltred = articleData.filter((articles: Article) => articles.title.includes(searchTerm) ||
        articles.content.includes(searchTerm))

    return (
        <>

            <input type="text" className='search' placeholder='Rechercher' onChange={(event) => setSearchTerm(event.target.value)} />
            <div className='containList'>
                <Link to="/ArticlePage">
                    {articleFiltred.map((articles: Article) => (
                        <ArticleThumbnail
                            id={articles.id}
                            title={articles.title}
                            image={articles.image}
                            content={articles.content}
                        />
                    ))}
                </Link>
            </div>

        </>
    )
}