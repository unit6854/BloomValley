interface GalleryProps {
  onAddToCart: () => void;
}

function Gallery({ onAddToCart }: GalleryProps) {
  const plants = [
    { id: 1, name: 'Aloe Plant', price: 12.99, image: '/Client1_AloePlant.png', description: 'A hardy succulent perfect for any home' },
    { id: 2, name: 'Apple Tree', price: 49.99, image: '/Client1_AppleTree.png', description: 'Beautiful fruit tree for your garden' },
    { id: 3, name: 'Birch Tree', price: 59.99, image: '/Client1_BirchTree.png', description: 'Elegant tree with stunning white bark' },
    { id: 4, name: 'Bird House', price: 24.99, image: '/Client1_BirdHouse.png', description: 'Handcrafted wooden bird house' },
    { id: 5, name: 'Potting Soil', price: 9.99, image: '/Client1_PottingSoil.png', description: 'Premium potting mix for healthy plants' },
    { id: 6, name: 'Spider Plant', price: 14.99, image: '/Client1_SpiderPlant.png', description: 'Easy care plant great for beginners' },
    { id: 7, name: 'String of Pearls', price: 18.99, image: '/Client1_StringofPearls.png', description: 'Unique cascading succulent' },
    { id: 8, name: 'Watering Can', price: 19.99, image: '/Client1_WateringCan.png', description: 'Stylish and functional watering can' },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
          <h1>Shop / Gallery</h1>
          <button className="btn-brown">View Shopping Cart (0)</button>
        </div>

        <h2>Items & Services</h2>
        <div style={{ overflowX: 'auto', marginTop: '32px' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((plant) => (
                <tr key={plant.id}>
                  <td><img src={plant.image} alt={plant.name} /></td>
                  <td>
                    <p style={{ fontWeight: 'bold' }}>{plant.name}</p>
                    <p style={{ fontSize: '14px', color: '#79512E' }}>{plant.description}</p>
                  </td>
                  <td><p style={{ fontWeight: 'bold' }}>${plant.price}</p></td>
                  <td><button className="btn-cart" onClick={onAddToCart}>Add to Cart</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
