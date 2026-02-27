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
    <div className="page-wrapper">
      <div className="page-content">
        <h1 style={{ marginBottom: '48px' }}>About Us</h1>

        <div className="grid-2" style={{ marginBottom: '64px' }}>
          <div className="card">
            <p>Bloom Valley Nursery is a local, family-owned plant nursery.</p>
            <p style={{ marginTop: '16px' }}>We focus on sustainability, creativity, and community.</p>
          </div>
          <div className="card">
            <h3>Hours of Operation:</h3>
            <p style={{ marginTop: '16px' }}>Mon–Fri: 9 a.m.–6 p.m.</p>
            <p>Sat–Sun: 10 a.m.–5 p.m.</p>
          </div>
        </div>

        <div className="card">
          <h2 style={{ marginBottom: '24px' }}>Feedback & Custom Orders</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input className="form-input" type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label">Message / Custom order details</label>
              <textarea className="form-input" name="message" value={formData.message} onChange={handleChange} required rows={6} />
            </div>
            <button className="btn-primary" type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
