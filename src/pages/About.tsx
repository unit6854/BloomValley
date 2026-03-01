import { useState } from 'react';

function About() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isCustomOrder, setIsCustomOrder] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please enter your name, email and feedback!');
      return;
    }

    const formData = {
      name: name,
      email: email,
      phone: phone,
      feedback: message,
      customOrder: isCustomOrder,
    };

    localStorage.setItem(name, JSON.stringify(formData));
    alert('Thank you for your message, ' + name + '!');

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setIsCustomOrder(false);
  }

  function handleClear() {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setIsCustomOrder(false);
  }

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
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #79512E', padding: '8px', fontFamily: 'Calibri', fontSize: '16px', color: '#00231C' }}>Monday – Friday</td>
                  <td style={{ border: '1px solid #79512E', padding: '8px', fontFamily: 'Calibri', fontSize: '16px', color: '#00231C', textAlign: 'center' }}>9:00 AM – 6:00 PM</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #79512E', padding: '8px', fontFamily: 'Calibri', fontSize: '16px', color: '#00231C' }}>Saturday</td>
                  <td style={{ border: '1px solid #79512E', padding: '8px', fontFamily: 'Calibri', fontSize: '16px', color: '#00231C', textAlign: 'center' }}>10:00 AM – 5:00 PM</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #79512E', padding: '8px', fontFamily: 'Calibri', fontSize: '16px', color: '#00231C' }}>Sunday</td>
                  <td style={{ border: '1px solid #79512E', padding: '8px', fontFamily: 'Calibri', fontSize: '16px', color: '#00231C', textAlign: 'center' }}>10:00 AM – 5:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ border: '2px solid #79512E', padding: '32px', backgroundColor: '#E0D2BD' }}>
          <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '25px', color: '#790D1D', marginBottom: '24px' }}>Contact Us</h2>

          <form onSubmit={handleSubmit}>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '15px', color: '#00231C', marginBottom: '8px' }}>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                style={{ width: '100%', padding: '8px 16px', border: '2px solid #79512E', backgroundColor: '#ffffff', fontFamily: 'Calibri', fontSize: '16px', color: '#00231C', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '15px', color: '#00231C', marginBottom: '8px' }}>Email Address:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                style={{ width: '100%', padding: '8px 16px', border: '2px solid #79512E', backgroundColor: '#ffffff', fontFamily: 'Calibri', fontSize: '16px', color: '#00231C', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '15px', color: '#00231C', marginBottom: '8px' }}>Phone Number:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your Phone Number (Optional)"
                style={{ width: '100%', padding: '8px 16px', border: '2px solid #79512E', backgroundColor: '#ffffff', fontFamily: 'Calibri', fontSize: '16px', color: '#00231C', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '15px', color: '#00231C', marginBottom: '8px' }}>Feedback / Order Information:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Feedback/Custom Order Information"
                rows={6}
                style={{ width: '100%', padding: '8px 16px', border: '2px solid #79512E', backgroundColor: '#ffffff', fontFamily: 'Calibri', fontSize: '16px', color: '#00231C', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="checkbox"
                checked={isCustomOrder}
                onChange={(e) => setIsCustomOrder(e.target.checked)}
                id="customOrder"
              />
              <label htmlFor="customOrder" style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#00231C' }}>Custom Order</label>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <button type="submit" style={{ padding: '12px 32px', backgroundColor: '#790D1D', color: '#ffffff', fontFamily: 'Arial', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Submit
              </button>
              <button type="button" onClick={handleClear} style={{ padding: '12px 32px', backgroundColor: '#777777', color: '#ffffff', fontFamily: 'Arial', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Clear Form
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default About;
