import { ShoppingCart } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'gallery' | 'about' | 'community') => void;
  cartCount: number;
}

function Header({ currentPage, onNavigate, cartCount }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Shop' },
    { id: 'about', label: 'About' },
    { id: 'community', label: 'Community' },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo" onClick={() => onNavigate('home')}>
          <img src="/Client1_LogoPalette1_790D1D.png" alt="Bloom Valley Logo" />
          <h1>Bloom Valley Nursery</h1>
        </div>
        <nav className="header-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as any)}
              className={`nav-btn ${currentPage === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button className="btn-brown">
          <ShoppingCart size={20} />
          <span>Cart ({cartCount})</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
