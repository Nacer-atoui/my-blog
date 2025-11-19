import { ArticleList } from "../components/ArticleList";


export function HomePage() {

    return (
        <>
            <section className="home">
                <h1 className="titleHome">Le prisme</h1>
                <div className="homeDiv">
                    <h2 className="underTitleHome">Là où l'actualité révèle ses multiples facettes</h2>
                    <p className="pHome">Chaque événement a plusieurs angles, chaque sujet mérite plusieurs regards. Sur Le Prisme, nous décomposons l'actualité pour mieux la comprendre.
                    Lisez, réagissez, débattez. Parce que c'est en croisant nos perspectives qu'on voit plus clair.
                    </p>
                </div>
                <div>
                    <ArticleList />
                </div>
            </section>
        </>
    )
}