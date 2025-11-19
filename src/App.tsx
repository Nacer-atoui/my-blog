
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage.tsx'
import { About } from './pages/About.tsx'
import { Contact } from './pages/Contact.tsx'
import { ArticleCreatePage } from './pages/ArticleCreatePage.tsx'
import './App.css'
import './components/Header.tsx'
import { Header } from './components/Header.tsx'
// import { ArticlePage } from './pages/ArticlePage.tsx'


function App() {

  return (
    <>
      <Header />
      {/* <ArticleList /> */}
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        {/* <Route path="/ArticlePage" element={<ArticlePage />} /> */}
        <Route path='/ArticleCreatePage' element={<ArticleCreatePage />}/>
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  )
}
export default App