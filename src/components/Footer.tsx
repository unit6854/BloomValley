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
    <footer style={{ backgroundColor: '#D4C4A8', borderTop: '2px solid #79512E', marginTop: '64px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 32px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>

          {/* NEWSLETTER */}
          <div>
            <h3 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '16px', color: '#790D1D', marginBottom: '16px' }}>
              Subscribe to our newsletter
            </h3>
            <form onSubmit={handleEmail} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Email address"
                required
                style={{ flex: 1, padding: '8px 16px', border: '2px solid #79512E', backgroundColor: '#E0D2BD', fontFamily: 'Calibri', fontSize: '16px', color: '#00231C' }}
              />
              <button
                type="submit"
                style={{ padding: '8px 24px', backgroundColor: '#790D1D', color: '#E0D2BD', fontFamily: 'Arial', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '16px', color: '#790D1D', marginBottom: '16px' }}>
              Follow us
            </h3>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: '#79512E' }}><Facebook size={24} /></a>
              <a href="#" style={{ color: '#79512E' }}><Instagram size={24} /></a>
              <a href="#" style={{ color: '#79512E' }}><PinIcon size={24} /></a>
            </div>
          </div>

        </div>

        {/* NAV LINKS */}
        <div style={{ borderTop: '1px solid #79512E', paddingTop: '32px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <button onClick={() => onNavigate('home')} style={{ fontFamily: 'Arial', fontSize: '14px', color: '#00231C', background: 'none', border: 'none', cursor: 'pointer' }}>Home</button>
          <span style={{ color: '#79512E' }}>|</span>
          <button onClick={() => onNavigate('gallery')} style={{ fontFamily: 'Arial', fontSize: '14px', color: '#00231C', background: 'none', border: 'none', cursor: 'pointer' }}>Shop</button>
          <span style={{ color: '#79512E' }}>|</span>
          <button onClick={() => onNavigate('about')} style={{ fontFamily: 'Arial', fontSize: '14px', color: '#00231C', background: 'none', border: 'none', cursor: 'pointer' }}>About</button>
          <span style={{ color: '#79512E' }}>|</span>
          <button onClick={() => onNavigate('community')} style={{ fontFamily: 'Arial', fontSize: '14px', color: '#00231C', background: 'none', border: 'none', cursor: 'pointer' }}>Community</button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
