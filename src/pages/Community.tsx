function Community() {
  const testimonials = [
    {
      quote: 'Best plant shop in town! Amazing quality and friendly staff.',
      author: 'Sarah M.',
    },
    {
      quote: 'Love the variety and the helpful plant care tips.',
      author: 'John D.',
    },
    {
      quote: 'The community workshops are fantastic for learning gardening!',
      author: 'Maria L.',
    },
  ];

  const events = [
    {
      title: 'Spring Plant Care Workshop',
      date: 'April 15, 2024',
      time: '2:00 PM',
    },
    {
      title: 'Sustainable Gardening Seminar',
      date: 'April 22, 2024',
      time: '3:00 PM',
    },
    {
      title: 'Community Garden Tour',
      date: 'May 1, 2024',
      time: '10:00 AM',
    },
  ];

  const partners = [
    'Local Parks & Rec',
    'City Green Initiative',
    'Sustainable Living Coalition',
    'Community Garden Alliance',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-green-700 mb-12">Community & Events</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-6">Customer Testimonials</h2>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border-l-4 border-green-700 pl-6 py-2">
                <p className="text-gray-700 italic mb-2">"{testimonial.quote}"</p>
                <p className="text-green-700 font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-6">Upcoming Workshops & Events</h2>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="border-2 border-green-700 p-4">
                <h3 className="font-bold text-green-700 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.date}</p>
                <p className="text-gray-600 text-sm">{event.time}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">Local Collaborations & Partners</h2>
        <div className="border-2 border-green-700 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-700 p-6 text-center rounded hover:bg-green-100 transition-colors"
              >
                <p className="font-medium text-green-700">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Community;
