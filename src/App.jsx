import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Contacts from './pages/Contacts.jsx';
import About from './pages/About.jsx';
import Category from './pages/Category.jsx';
import NotFound from './pages/NotFound.jsx';
import Recipe from './pages/Recipe.jsx';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter basename='/react-food'>
        <Header />
        <main className="container content">
          <Routes>
            <Route
              path="/category"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/contacts"
              element={<Contacts />}
            />
            <Route
              path="/category/:name"
              element={<Category />}
            />
            <Route
              path="/category/:name/:id"
              element={<Recipe />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
