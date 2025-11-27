import './ArticleThumbnail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

// typage de mon interface Article
export interface Article {
    id: number;
    title: string;
    content?: string;
    image: string;
    createdAt?: Date;
    isPublished?: boolean;
    likeCount?: number;
    categoryName?: string;
}

// fonction qui constitue les card d'article dans mes listes d'articles
export function ArticleThumbnail({ id, title, image, content }: Article) {
    const dateObj = new Date();
    const [nbLike, setNbLike] = useState(false);

    // fonction de click pour le système de like
    function handleClick() {
        setNbLike(!nbLike);
    }

    return (
        <>

            {

                <div className="articleCard">
                    <h2 className='titleCard'>{title.length > 50 ? title.slice(0, 50) + "..." : title}</h2>
                    <img className='imgArticle' src={image} alt="" />
                    <p className='content-card'>{content?.slice(0, 100) + "..."} <Link className='see-more' to={`/articles/${id}`}>Voir plus</Link></p>
                    <p className='date'>{dateObj.toLocaleDateString()}</p>
                    <button className='like' onClick={handleClick}>❤️</button>
                    <p>{nbLike ? 1 : 0}</p>
                </div>

            }
        </>
    )

}
