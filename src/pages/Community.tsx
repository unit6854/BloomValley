function Community() {
  const testimonials = [
    { quote: 'Best plant shop in town! Amazing quality and friendly staff.', author: 'Sarah M.' },
    { quote: 'Love the variety and the helpful plant care tips.', author: 'John D.' },
    { quote: 'The community workshops are fantastic for learning gardening!', author: 'Maria L.' },
  ];

  const events = [
    { title: 'Spring Plant Care Workshop', date: 'April 15, 2025', time: '2:00 PM' },
    { title: 'Sustainable Gardening Seminar', date: 'April 22, 2025', time: '3:00 PM' },
    { title: 'Community Garden Tour', date: 'May 1, 2025', time: '10:00 AM' },
  ];

  const partners = [
    'Local Parks & Rec',
    'City Green Initiative',
    'Sustainable Living Coalition',
    'Community Garden Alliance',
  ];

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <h1 style={{ marginBottom: '48px' }}>Community & Events</h1>

        <div className="grid-2" style={{ marginBottom: '64px' }}>
          <section>
            <h2>Customer Testimonials</h2>
            <div style={{ marginTop: '24px' }}>
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial">
                  <p>"{t.quote}"</p>
                  <span>— {t.author}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Upcoming Workshops & Events</h2>
            <div style={{ marginTop: '24px' }}>
              {events.map((event, i) => (
                <div key={i} className="card-sm" style={{ marginBottom: '16px' }}>
                  <h3>{event.title}</h3>
                  <p style={{ fontSize: '14px', marginTop: '8px' }}>{event.date}</p>
                  <p style={{ fontSize: '14px' }}>{event.time}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section>
          <h2>Local Collaborations & Partners</h2>
          <div className="card" style={{ marginTop: '24px' }}>
            <div className="grid-4">
              {partners.map((partner, i) => (
                <div key={i} className="partner-card">
                  <p style={{ fontWeight: 'bold' }}>{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Community;
