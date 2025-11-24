
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Article } from "../components/ArticleThumbnail";
import { ArticleThumbnail } from "../components/ArticleThumbnail";


export function ArticlePage() {
    const { id } = useParams(); // récupère le paramètre dynamique
    const [articleD, setArticleD] = useState<Article | null>(null);

    useEffect(() => {
            fetch(`http://localhost:3001/articles/${id}`)
                .then(response => response.json())
                .then(data => setArticleD(data))
        }, [id])
    
    if (!articleD) {
        return "Article introuvable."
    }

    return (
        <div>
            <h1>Article {id}</h1>
            <ArticleThumbnail 
                key={articleD.id}
                id={articleD.id}
                title={articleD.title}
                image={articleD.image}
                content={articleD.content}
            />
        </div>
    )
}