import { Facebook, Instagram, PinIcon } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'gallery' | 'about' | 'community') => void;
}

function Footer({ onNavigate }: FooterProps) {
  const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-green-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-green-700 mb-4">Subscribe to our newsletter</h3>
            <form onSubmit={handleEmail} className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                required
                className="flex-1 px-4 py-2 border-2 border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-green-700 text-white font-medium hover:bg-green-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h3 className="font-bold text-green-700 mb-4">Follow us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-green-700 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-700 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-700 transition-colors">
                <PinIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <nav className="flex flex-wrap gap-4 justify-center text-sm text-gray-600">
            <button onClick={() => onNavigate('home')} className="hover:text-green-700">Home</button>
            <span>|</span>
            <button onClick={() => onNavigate('gallery')} className="hover:text-green-700">Shop</button>
            <span>|</span>
            <button onClick={() => onNavigate('about')} className="hover:text-green-700">About</button>
            <span>|</span>
            <button onClick={() => onNavigate('community')} className="hover:text-green-700">Community</button>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
