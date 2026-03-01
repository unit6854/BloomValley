import { ArrowRight } from 'lucide-react';

function Home() {
  const promos = [
    { title: 'Buy 2 Get 1 Free', subtitle: '(Herbs)' },
    { title: '10% Off', subtitle: 'Native Trees' },
    { title: 'New Arrivals', subtitle: 'Spring Annuals' },
  ];

  const perks = [
    { title: 'Locally Grown', description: 'All our plants are grown right here in the valley.' },
    { title: 'Expert Advice', description: 'Our staff is here to help you find the right plant.' },
    { title: 'Sustainable Practices', description: 'We care about the environment and grow responsibly.' },
  ];

  const categories = [
    { name: 'Perennials' },
    { name: 'Annuals' },
    { name: 'Shrubs' },
    { name: 'Trees' },
    { name: 'Succulents' },
    { name: 'Accessories' },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff' }}>

      <section style={{ position: 'relative', height: '500px', overflow: 'hidden', backgroundImage: 'url(/Client1_MapleTree.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '30px', color: '#ffffff', marginBottom: '16px' }}>Welcome to Bloom Valley</h2>
          <p style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#ffffff', marginBottom: '32px' }}>Your local family-owned plant nursery</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button style={{ padding: '12px 32px', backgroundColor: '#E0D2BD', color: '#79512E', fontFamily: 'Arial', fontWeight: 'bold', border: '2px solid #79512E', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Shop Plants <ArrowRight size={20} />
            </button>
            <button style={{ padding: '12px 32px', backgroundColor: 'transparent', color: '#ffffff', fontFamily: 'Arial', fontWeight: 'bold', border: '2px solid #ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
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

        <section style={{ marginBottom: '64px', backgroundColor: '#E0D2BD', padding: '48px', border: '2px solid #79512E' }}>
          <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '25px', color: '#790D1D', marginBottom: '32px', textAlign: 'center' }}>Why Shop Here</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {perks.map((perk, index) => (
              <div key={index} style={{ textAlign: 'center', padding: '16px' }}>
                <p style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '16px', color: '#790D1D', marginBottom: '8px' }}>{perk.title}</p>
                <p style={{ fontFamily: 'Calibri', fontSize: '15px', color: '#00231C' }}>{perk.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '25px', color: '#790D1D', marginBottom: '32px' }}>Shop by Category</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {categories.map((category, index) => (
              <div key={index} style={{ border: '2px solid #79512E', padding: '32px', textAlign: 'center', backgroundColor: '#E0D2BD', cursor: 'pointer' }}>
                <p style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '16px', color: '#00231C', margin: 0 }}>{category.name}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;
