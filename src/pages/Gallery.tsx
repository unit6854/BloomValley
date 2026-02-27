interface GalleryProps {
  onAddToCart: () => void;
}

function Gallery({ onAddToCart }: GalleryProps) {
  const plants = [
    { id: 1, name: 'Monstera Deliciosa', price: 12.99, image: 'https://images.pexels.com/photos/4750252/pexels-photo-4750252.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, name: 'Pothos Golden', price: 12.99, image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, name: 'Snake Plant', price: 12.99, image: 'https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, name: 'Philodendron', price: 12.99, image: 'https://images.pexels.com/photos/4577428/pexels-photo-4577428.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, name: 'Peace Lily', price: 12.99, image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-green-700">Shop / Gallery</h1>
        <button className="px-6 py-2 border-2 border-green-700 text-green-700 font-medium hover:bg-green-50 transition-colors">
          View Shopping Cart (0)
        </button>
      </div>

      <h2 className="text-2xl font-bold text-green-700 mb-8">Items & Services</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-2 border-green-700 p-4 text-left font-bold text-green-700 bg-green-50">Image</th>
              <th className="border-2 border-green-700 p-4 text-left font-bold text-green-700 bg-green-50">Description</th>
              <th className="border-2 border-green-700 p-4 text-left font-bold text-green-700 bg-green-50">Price</th>
              <th className="border-2 border-green-700 p-4 text-left font-bold text-green-700 bg-green-50">Action</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant) => (
              <tr key={plant.id}>
                <td className="border-2 border-green-700 p-4">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                </td>
                <td className="border-2 border-green-700 p-4">
                  <p className="font-medium text-gray-900">{plant.name}</p>
                  <p className="text-sm text-gray-600">Beautiful plant for your home</p>
                </td>
                <td className="border-2 border-green-700 p-4 font-bold text-gray-900">${plant.price}</td>
                <td className="border-2 border-green-700 p-4">
                  <button
                    onClick={onAddToCart}
                    className="px-4 py-2 bg-green-700 text-white font-medium hover:bg-green-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Gallery;
