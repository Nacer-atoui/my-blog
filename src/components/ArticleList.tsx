import './ArticleThumbnail.css'
import './ArticleList.css'
import { ArticleThumbnail, type Article } from './ArticleThumbnail.tsx'
import { useEffect, useState } from 'react'
// import type { Article } from './ArticleThumbnail.tsx'


// interface Article {
//     id: number;
//     title: string;
//     content: string;
//     image: string;
//     createdAt: Date;
//     isPublished: boolean;
//     likeCount: number;
//     categoryName: string;
// }

export function ArticleList() {
    const [articleData, setArticleData] = useState([]);
        useEffect(() => {
            fetch('ArticleObjet.json')
                .then(response => response.json())
                .then(data => setArticleData(data))
        }, [])
    
        
        return (
            <>
        <div className='containList'>
         {articleData.map((article: Article) => (
            <ArticleThumbnail
             id={article.id}
             title={article.title}
             image={article.image}
             content={article.content}
            />

        ))}
        </div>
         </>
    )
}