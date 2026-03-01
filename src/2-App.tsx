import { useState } from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Community from './pages/Community';
import Header from './components/Header';
import Footer from './components/Footer';

type Page = 'home' | 'gallery' | 'about' | 'community';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'gallery':
        return <Gallery onAddToCart={addToCart} />;
      case 'about':
        return <About />;
      case 'community':
        return <Community />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartCount={cartCount}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
