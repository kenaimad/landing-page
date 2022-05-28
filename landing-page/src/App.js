import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyled, { UniversalComponentContainer } from './Global.styled';
import Navbar from './Layout/Navbar/Navbar';
import LogoBar from './Layout/LogoBar/LogoBar';
import HomePage from './pages/HomePage/HomePage';
import AboutMePage from './pages/AboutMePage/AboutMePage';
import KnowledgePage from './pages/KnowledgePage/KnowledgePage';
import OfferPage from './pages/OfferPage/OfferPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './Layout/Footer/Footer';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import ArticlePage from './pages/ArticlesPage/ArticlePage/ArticlePage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import RecipePage from './pages/RecipesPage/RecipePage/RecipePage';

import { ApplicationWrapper } from './Global.styled';


function App() {
  return (
    <Router>
      <GlobalStyled />
      <ApplicationWrapper>
        <LogoBar />
        <Navbar />
        <UniversalComponentContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/knowledge" element={<KnowledgePage />} />
            <Route path="/knowledge/articles" element={<ArticlesPage />} />
            <Route path="/knowledge/articles/:id" element={<ArticlePage />} />
            <Route path="/knowledge/recipes" element={<RecipesPage />} />
            <Route path="/knowledge/recipes/:id" element={<RecipePage />} />
            <Route path="/offer" element={<OfferPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </UniversalComponentContainer>
        <Footer />
      </ApplicationWrapper>
    </Router>
  );
}

export default App;
