function Community() {
  const testimonials = [
    { quote: 'Best plant shop in town! Amazing quality and super friendly staff.', author: 'Sarah M.' },
    { quote: 'Love the variety!They also gave me helpful plant care tips.', author: 'John D.' },
    { quote: 'The community workshops werefantastic for learning about cool gardening techniques!', author: 'Maria L.' },
  ];

  const events = [
    { title: 'Spring Plant Care Workshop', date: 'April 15, 2025', time: '2:00 PM' },
    { title: 'Sustainable Gardening Seminar', date: 'April 22, 2025', time: '3:00 PM' },
    { title: 'Community Garden Tour', date: 'May 1, 2025', time: '10:00 AM' },
  ];

  const partners = [
    'Local Parks & Rec',
    'City Green Initiative',
    'Sustainable Living Mission',
    'Community Garden Alliance',
  ];

  return (
    <div style={{ backgroundColor: '#E0D2BD', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 32px' }}>

        <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '30px', color: '#790D1D', marginBottom: '48px' }}>Community & Events</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '64px' }}>

          <section>
            <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '25px', color: '#790D1D', marginBottom: '24px' }}>Customer Testimonials</h2>
            {testimonials.map((t, i) => (
              <div key={i} style={{ borderLeft: '4px solid #790D1D', paddingLeft: '24px', marginBottom: '24px' }}>
                <p style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#00231C', fontStyle: 'italic', marginBottom: '8px' }}>"{t.quote}"</p>
                <p style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '15px', color: '#790D1D', margin: 0 }}>— {t.author}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '25px', color: '#790D1D', marginBottom: '24px' }}>Upcoming Workshops & Events</h2>
            {events.map((event, i) => (
              <div key={i} style={{ border: '2px solid #79512E', padding: '16px', marginBottom: '16px', backgroundColor: '#E0D2BD' }}>
                <h3 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '16px', color: '#790D1D', marginBottom: '8px' }}>{event.title}</h3>
                <p style={{ fontFamily: 'Calibri', fontSize: '14px', color: '#00231C', margin: '0 0 4px 0' }}>{event.date}</p>
                <p style={{ fontFamily: 'Calibri', fontSize: '14px', color: '#00231C', margin: 0 }}>{event.time}</p>
              </div>
            ))}
          </section>

        </div>

        <section>
          <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '25px', color: '#790D1D', marginBottom: '24px' }}>Local Collaborations & Partners</h2>
          <div style={{ border: '2px solid #79512E', padding: '32px', backgroundColor: '#E0D2BD' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {partners.map((partner, i) => (
                <div key={i} style={{ border: '1px solid #79512E', padding: '24px', textAlign: 'center', backgroundColor: '#D4C4A8' }}>
                  <p style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '15px', color: '#00231C', margin: 0 }}>{partner}</p>
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
