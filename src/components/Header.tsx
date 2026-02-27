import { Leaf, ShoppingCart } from 'lucide-react';

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
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-12 h-12 border-2 border-green-700 flex items-center justify-center">
              <Leaf className="text-green-700" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-green-700">Bloom Valley Nursery</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as any)}
                className={`font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-green-700 border-b-2 border-green-700'
                    : 'text-gray-700 hover:text-green-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className="flex items-center gap-2 px-4 py-2 border-2 border-green-700 text-green-700 font-medium hover:bg-green-50 transition-colors">
            <ShoppingCart size={20} />
            <span>Cart ({cartCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
