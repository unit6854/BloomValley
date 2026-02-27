import { useState } from 'react';

function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-green-700 mb-12">About Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="border-2 border-green-700 p-8">
          <p className="text-lg text-gray-700 mb-4">
            Bloom Valley Nursery is a local, family-owned plant nursery.
          </p>
          <p className="text-lg text-gray-700">
            We focus on sustainability, creativity, and community.
          </p>
        </div>

        <div className="border-2 border-green-700 p-8">
          <h3 className="font-bold text-green-700 mb-4 text-lg">Hours of Operation:</h3>
          <p className="text-gray-700 mb-2">Mon–Fri: 9 a.m.–6 p.m.</p>
          <p className="text-gray-700">Sat–Sun: 10 a.m.–5 p.m.</p>
        </div>
      </div>

      <div className="border-2 border-green-700 p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Feedback & Custom Orders</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium text-gray-700 mb-2">
              Message / Custom order details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border-2 border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-green-700 text-white font-medium hover:bg-green-800 transition-colors"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;
