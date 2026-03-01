import { useState } from 'react';

function About() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 32px' }}>

        <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '30px', color: '#790D1D', marginBottom: '48px' }}>About Us</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '64px' }}>
          <div style={{ border: '2px solid #79512E', padding: '32px', backgroundColor: '#E0D2BD' }}>
            <p style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#00231C', marginBottom: '16px' }}>Bloom Valley Nursery is a local, family-owned plant nursery.</p>
            <p style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#00231C' }}>We focus on sustainability, creativity, and community.</p>
          </div>
          <div style={{ border: '2px solid #79512E', padding: '32px', backgroundColor: '#E0D2BD' }}>
            <h3 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '16px', color: '#790D1D', marginBottom: '16px' }}>Hours of Operation:</h3>
            <p style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#00231C', marginBottom: '8px' }}>Mon–Fri: 9 a.m.–6 p.m.</p>
            <p style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#00231C' }}>Sat–Sun: 10 a.m.–5 p.m.</p>
          </div>
        </div>

        <div style={{ border: '2px solid #79512E', padding: '32px', backgroundColor: '#E0D2BD' }}>
          <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '25px', color: '#790D1D', marginBottom: '24px' }}>Feedback & Custom Orders</h2>
          <form onSubmit={handleSubmit}>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '15px', color: '#00231C', marginBottom: '8px' }}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px 16px', border: '2px solid #79512E', backgroundColor: '#ffffff', fontFamily: 'Calibri', fontSize: '16px', color: '#00231C', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '15px', color: '#00231C', marginBottom: '8px' }}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px 16px', border: '2px solid #79512E', backgroundColor: '#ffffff', fontFamily: 'Calibri', fontSize: '16px', color: '#00231C', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '15px', color: '#00231C', marginBottom: '8px' }}>Message / Custom order details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                style={{ width: '100%', padding: '8px 16px', border: '2px solid #79512E', backgroundColor: '#ffffff', fontFamily: 'Calibri', fontSize: '16px', color: '#00231C', boxSizing: 'border-box' }}
              />
            </div>

            <button type="submit" style={{ padding: '12px 32px', backgroundColor: '#E0D2BD', color: '#79512E', fontFamily: 'Arial', fontWeight: 'bold', border: '2px solid #79512E', cursor: 'pointer' }}>
              Submit Feedback
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default About;
