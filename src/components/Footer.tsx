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
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <h3>Subscribe to our newsletter</h3>
            <form className="newsletter-form" onSubmit={handleEmail}>
              <input type="email" placeholder="Email address" required />
              <button className="btn-primary" type="submit">Subscribe</button>
            </form>
          </div>
          <div>
            <h3>Follow us</h3>
            <div className="social-links" style={{ marginTop: '16px' }}>
              <a href="#"><Facebook size={24} /></a>
              <a href="#"><Instagram size={24} /></a>
              <a href="#"><PinIcon size={24} /></a>
            </div>
          </div>
        </div>
        <div className="footer-nav">
          <button onClick={() => onNavigate('home')}>Home</button>
          <span>|</span>
          <button onClick={() => onNavigate('gallery')}>Shop</button>
          <span>|</span>
          <button onClick={() => onNavigate('about')}>About</button>
          <span>|</span>
          <button onClick={() => onNavigate('community')}>Community</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
