import { ArrowRight } from 'lucide-react';

function Home() {
  const promos = [
    { title: 'Buy 2 Get 1 Free', subtitle: '(Herbs)' },
    { title: '10% Off', subtitle: 'Native Trees' },
    { title: 'New Arrivals', subtitle: 'Spring Annuals' },
  ];

  const categories = [
    { name: 'Perennials', color: 'bg-green-100' },
    { name: 'Annuals', color: 'bg-green-100' },
    { name: 'Shrubs', color: 'bg-green-100' },
  ];

  return (
    <div>
      <section className="relative h-96 bg-gradient-to-r from-green-50 to-green-100 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2088478/pexels-photo-2088478.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Seasonal garden"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Welcome to Bloom Valley</h2>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-green-700 text-white font-medium hover:bg-green-800 transition-colors flex items-center gap-2 border-2 border-green-700">
              Shop Plants
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-3 bg-white text-green-700 font-medium hover:bg-green-50 transition-colors flex items-center gap-2 border-2 border-green-700">
              Visit Us
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-green-700 mb-8">Shopping Promos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promos.map((promo, index) => (
              <div
                key={index}
                className="border-2 border-green-700 p-8 text-center hover:bg-green-50 transition-colors"
              >
                <p className="text-xl font-bold text-green-700 mb-2">{promo.title}</p>
                <p className="text-gray-600">{promo.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-green-700 mb-8">Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`${category.color} border-2 border-green-700 p-12 text-center cursor-pointer hover:shadow-lg transition-shadow`}
              >
                <p className="font-bold text-green-700">{category.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
