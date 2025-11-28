
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage.tsx'
import { About } from './pages/About.tsx'
import { Contact } from './pages/Contact.tsx'
import { ArticleCreatePage } from './pages/ArticleCreatePage.tsx'
import './App.css'
import './components/Header.tsx'
import { Header } from './components/Header.tsx'
import { ArticleDetailPage } from './pages/ArticleDetailPage.tsx'
import UpdateArticlePage from './pages/UpdateArticlePage.tsx'
import { ArticleList } from './components/ArticleList.tsx'
import Page404 from './pages/Page404.tsx'
// import { Toaster } from 'sonner'


function App() {

  return (
    <>
      <Header />
      {/* <Toaster /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path='/create' element={<ArticleCreatePage />} />
        <Route path='/articles/:id/edit' element={<UpdateArticlePage />} />
        <Route path="/articles/:id" element={<ArticleDetailPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*'  element={<Page404 />} />
      </Routes>
    </>
  )
}
export default App