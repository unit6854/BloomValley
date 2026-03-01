import { useState } from 'react';

function Gallery({ onAddToCart }: any) {
  const [showCart, setShowCart] = useState(false);

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

  function handleAddToCart(name: string) {
    onAddToCart(name);
    alert('Item added to cart: ' + name);
  }

  function getCartItems() {
    const existing = sessionStorage.getItem('cartItems');
    return existing ? JSON.parse(existing) : [];
  }

  function handleClearCart() {
    sessionStorage.removeItem('cartItems');
    alert('Cart has been cleared!');
    setShowCart(false);
  }

  function handleProcessOrder() {
    sessionStorage.removeItem('cartItems');
    alert('Thank you for your order!');
    setShowCart(false);
  }

  const cartItems = getCartItems();

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 32px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '30px', color: '#790D1D', margin: 0 }}>Shop / Gallery</h1>
          <button onClick={() => setShowCart(true)} style={{ padding: '8px 24px', border: '2px solid #79512E', backgroundColor: '#E0D2BD', color: '#79512E', fontFamily: 'Arial', fontWeight: 'bold', cursor: 'pointer' }}>
            View Cart ({cartItems.length})
          </button>
        </div>

        <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '25px', color: '#790D1D', marginBottom: '32px' }}>Items & Services</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '2px solid #79512E', padding: '16px', textAlign: 'left', fontFamily: 'Arial', fontWeight: 'bold', color: '#790D1D', backgroundColor: '#E0D2BD', width: '120px' }}>Image</th>
              <th style={{ border: '2px solid #79512E', padding: '16px', textAlign: 'left', fontFamily: 'Arial', fontWeight: 'bold', color: '#790D1D', backgroundColor: '#E0D2BD' }}>Description</th>
              <th style={{ border: '2px solid #79512E', padding: '16px', textAlign: 'left', fontFamily: 'Arial', fontWeight: 'bold', color: '#790D1D', backgroundColor: '#E0D2BD', width: '100px' }}>Price</th>
              <th style={{ border: '2px solid #79512E', padding: '16px', textAlign: 'left', fontFamily: 'Arial', fontWeight: 'bold', color: '#790D1D', backgroundColor: '#E0D2BD', width: '130px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant) => (
              <tr key={plant.id} style={{ backgroundColor: '#ffffff' }}>
                <td style={{ border: '2px solid #79512E', padding: '12px' }}>
                  <img src={plant.image} alt={plant.name} style={{ width: '80px', height: '80px', objectFit: 'cover', display: 'block' }} />
                </td>
                <td style={{ border: '2px solid #79512E', padding: '16px' }}>
                  <p style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '16px', color: '#00231C', margin: '0 0 4px 0' }}>{plant.name}</p>
                  <p style={{ fontFamily: 'Calibri', fontSize: '14px', color: '#79512E', margin: 0 }}>{plant.description}</p>
                </td>
                <td style={{ border: '2px solid #79512E', padding: '16px', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '16px', color: '#00231C' }}>
                  ${plant.price}
                </td>
                <td style={{ border: '2px solid #79512E', padding: '16px' }}>
                  <button onClick={() => handleAddToCart(plant.name)} style={{ padding: '8px 16px', backgroundColor: '#E0D2BD', color: '#79512E', fontFamily: 'Arial', fontWeight: 'bold', border: '2px solid #79512E', cursor: 'pointer' }}>
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {showCart && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#ffffff', border: '2px solid #79512E', padding: '32px', width: '500px', maxWidth: '90%', position: 'relative' }}>
            <button onClick={() => setShowCart(false)} style={{ position: 'absolute', top: '12px', right: '16px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#00231C' }}>X</button>
            <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '25px', color: '#790D1D', marginBottom: '24px' }}>Your Cart</h2>
            {cartItems.length === 0 ? (
              <p style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#00231C' }}>Your cart is empty.</p>
            ) : (
              <ul style={{ marginBottom: '24px', paddingLeft: '20px' }}>
                {cartItems.map((item: string, index: number) => (
                  <li key={index} style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#00231C', marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            )}
            <div style={{ display: 'flex', gap: '16px' }}>
              <button onClick={handleClearCart} style={{ padding: '10px 24px', backgroundColor: '#777777', color: '#ffffff', fontFamily: 'Arial', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Clear Cart
              </button>
              <button onClick={handleProcessOrder} style={{ padding: '10px 24px', backgroundColor: '#790D1D', color: '#ffffff', fontFamily: 'Arial', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Process Order
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Gallery;
