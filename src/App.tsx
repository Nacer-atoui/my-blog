
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage.tsx'
import { About } from './pages/About.tsx'
import { Contact } from './pages/Contact.tsx'
import { ArticleCreatePage } from './pages/ArticleCreatePage.tsx'
import './App.css'
import './components/Header.tsx'
import { Header } from './components/Header.tsx'
import { ArticlePage } from './pages/ArticlePage.tsx'
import ArticlesPage from './pages/ArticlesPage.tsx'


function App() {

  return (
    <>
      <Header />
      {/* <ArticleList /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path='/articles/create' element={<ArticleCreatePage />}/>
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}
export default App