import './ArticleThumbnail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export interface Article {
    id: number;
    title: string;
    content: string;
    image: string;
    createdAt?: Date;
    isPublished?: boolean;
    likeCount?: number;
    categoryName?: string;
}

export function ArticleThumbnail({ id, title, image, content }: Article) {
    const dateObj = new Date();
    const [nbLike, setNbLike] = useState(false);

    function handleClick() {
        setNbLike(!nbLike);
    }

    return (
        <>

            {

                <div className="articleCard">
                    
                    <Link to={`/articles/${id}`} className='articleLink'>
                    <h2 className='titleCard'>{title}</h2>
                    <img className='imgArticle' src={image} alt="" />
                    <p>{content}</p><br />
                    </Link>
                    <p className='date'>{dateObj.toLocaleDateString()}</p>
                    <button className='like' onClick={handleClick}>❤️</button>
                    <p>{nbLike ? 1 : 0}</p>

                </div>

            }
        </>
    )

}
