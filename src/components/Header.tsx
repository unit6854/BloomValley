import { ShoppingCart } from 'lucide-react';

function Header({ currentPage, onNavigate, cartCount }: any) {
  return (
    <header style={{ borderBottom: '1px solid #79512E', backgroundColor: '#E0D2BD', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => onNavigate('home')}>
          <img src="/Client1_LogoPalette1_790D1D.png" alt="Bloom Valley Logo" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
          <h1 style={{ fontSize: '25px', fontWeight: 'bold', fontFamily: 'Arial', color: '#790D1D', margin: 0 }}>Bloom Valley Nursery</h1>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <button onClick={() => onNavigate('home')} style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '15px', background: 'none', border: 'none', borderBottom: currentPage === 'home' ? '2px solid #790D1D' : 'none', cursor: 'pointer', color: currentPage === 'home' ? '#790D1D' : '#00231C', padding: '4px 0' }}>Home</button>
          <button onClick={() => onNavigate('gallery')} style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '15px', background: 'none', border: 'none', borderBottom: currentPage === 'gallery' ? '2px solid #790D1D' : 'none', cursor: 'pointer', color: currentPage === 'gallery' ? '#790D1D' : '#00231C', padding: '4px 0' }}>Shop</button>
          <button onClick={() => onNavigate('about')} style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '15px', background: 'none', border: 'none', borderBottom: currentPage === 'about' ? '2px solid #790D1D' : 'none', cursor: 'pointer', color: currentPage === 'about' ? '#790D1D' : '#00231C', padding: '4px 0' }}>About</button>
          <button onClick={() => onNavigate('community')} style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '15px', background: 'none', border: 'none', borderBottom: currentPage === 'community' ? '2px solid #790D1D' : 'none', cursor: 'pointer', color: currentPage === 'community' ? '#790D1D' : '#00231C', padding: '4px 0' }}>Community</button>
        </nav>
        <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '2px solid #79512E', backgroundColor: 'transparent', color: '#79512E', fontFamily: 'Arial', fontWeight: 'bold', cursor: 'pointer' }}>
          <ShoppingCart size={20} />
          <span>Cart ({cartCount})</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
