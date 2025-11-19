// import { ArticleThumbnail, type Article } from "../components/ArticleThumbnail";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { useState } from "react";

// export function ArticlePage() {
//     const [data, setData] = useState<Article>();
//     const { id } = useParams(); // récupère le paramètre dynamique

//     useEffect(() => {

//         fetch(`http://localhost:3001/articles/${id}`)
//             .then((res) => {
//                 if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`); //vérifie la réponse
//                 return res.json(); // transforme le JSON en objet JavaScript si réponse ok
//             })
//             .then((data) => setData(data)) // on stocke les données dans le state.

//     }, []);

//     return (
//         <>
//             <div className="ArticlePageList">
//                 {data ? (
//                     <ArticleThumbnail
//                         id={data.id}
//                         title={data.title}
//                         image={data.image}
//                         content={data.content}
//                     />
//                 ) : (
//                     <p>Chargement en cours ou Article non trouvé...</p>
//                 )}

//             </div>
//         </>
//     )
// }