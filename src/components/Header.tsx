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
    <header style={{ borderBottom: '1px solid #79512E', backgroundColor: '#E0D2BD', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          
          {/* LOGO */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => onNavigate('home')}>
            <img src="/Client1_LogoPalette1_790D1D.png" alt="Bloom Valley Logo" style={{ width: '48px', height: '48px' }} />
            <h1 style={{ fontSize: '25px', fontWeight: 'bold', fontFamily: 'Arial', color: '#790D1D' }}>Bloom Valley Nursery</h1>
          </div>

          {/* NAV LINKS */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as any)}
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: currentPage === item.id ? '#790D1D' : '#00231C',
                  borderBottom: currentPage === item.id ? '2px solid #790D1D' : 'none',
                  padding: '4px 0'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CART BUTTON */}
          <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '2px solid #79512E', backgroundColor: 'transparent', color: '#79512E', fontFamily: 'Arial', fontWeight: 'bold', cursor: 'pointer' }}>
            <ShoppingCart size={20} />
            <span>Cart ({cartCount})</span>
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;
