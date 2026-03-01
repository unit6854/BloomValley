import { useState } from 'react';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Community from './pages/Community';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartCount, setCartCount] = useState(0);

  function addToCart(itemName: string) {
    const existing = sessionStorage.getItem('cartItems');
    const cart = existing ? JSON.parse(existing) : [];
    cart.push(itemName);
    sessionStorage.setItem('cartItems', JSON.stringify(cart));
    setCartCount(cart.length);
  }

  function renderPage() {
    if (currentPage === 'gallery') {
      return <Gallery onAddToCart={addToCart} />;
    } else if (currentPage === 'about') {
      return <About />;
    } else if (currentPage === 'community') {
      return <Community />;
    } else {
      return <Home />;
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
      <Header currentPage={currentPage} onNavigate={setCurrentPage} cartCount={cartCount} />
      <main style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
