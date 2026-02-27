import { ArrowRight } from 'lucide-react';

function Home() {
  const promos = [
    { title: 'Buy 2 Get 1 Free', subtitle: '(Herbs)' },
    { title: '10% Off', subtitle: 'Native Trees' },
    { title: 'New Arrivals', subtitle: 'Spring Annuals' },
  ];

  const categories = [
    { name: 'Perennials' },
    { name: 'Annuals' },
    { name: 'Shrubs' },
  ];

  return (
    <div className="page-wrapper">
      <section className="hero" style={{ backgroundImage: 'url(/Client1_MapleTree.png)' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="hero-title">Welcome to Bloom Valley</h2>
          <div className="hero-buttons">
            <button className="btn-primary">Shop Plants <ArrowRight size={20} /></button>
            <button className="btn-outline">Visit Us <ArrowRight size={20} /></button>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section style={{ marginBottom: '64px' }}>
          <h2>Shopping Promos</h2>
          <div className="grid-3" style={{ marginTop: '32px' }}>
            {promos.map((promo, index) => (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 'bold', fontSize: '20px', color: '#790D1D' }}>{promo.title}</p>
                <p>{promo.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Categories</h2>
          <div className="grid-3" style={{ marginTop: '32px' }}>
            {categories.map((category, index) => (
              <div key={index} className="card-center">
                <p style={{ fontWeight: 'bold' }}>{category.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
