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
    <div style={{ backgroundColor: '#E0D2BD' }}>
      <section style={{ position: 'relative', height: '500px', overflow: 'hidden', backgroundImage: 'url(/Client1_MapleTree.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '30px', color: '#E0D2BD', marginBottom: '32px' }}>Welcome to Bloom Valley</h2>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button style={{ padding: '12px 32px', backgroundColor: '#790D1D', color: '#E0D2BD', fontFamily: 'Arial', fontWeight: 'bold', border: '2px solid #790D1D', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Shop Plants <ArrowRight size={20} />
            </button>
            <button style={{ padding: '12px 32px', backgroundColor: 'transparent', color: '#E0D2BD', fontFamily: 'Arial', fontWeight: 'bold', border: '2px solid #E0D2BD', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Visit Us <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 32px' }}>
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '25px', color: '#790D1D', marginBottom: '32px' }}>Shopping Promos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {promos.map((promo, index) => (
              <div key={index} style={{ border: '2px solid #79512E', padding: '32px', textAlign: 'center', backgroundColor: '#E0D2BD' }}>
                <p style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '20px', color: '#790D1D', marginBottom: '8px' }}>{promo.title}</p>
                <p style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#00231C' }}>{promo.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '25px', color: '#790D1D', marginBottom: '32px' }}>Categories</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {categories.map((category, index) => (
              <div key={index} style={{ border: '2px solid #79512E', padding: '48px', textAlign: 'center', backgroundColor: '#E0D2BD', cursor: 'pointer' }}>
                <p style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '16px', color: '#00231C' }}>{category.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
