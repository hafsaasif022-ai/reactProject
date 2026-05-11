import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [city, setCity] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const navigate = useNavigate();

  function handleSearch() {
    if (!city) { alert('Please enter a city.'); return; }
    if (!checkin || !checkout) { alert('Please select dates.'); return; }
    navigate('/services');
  }

  return (
    <div>
      <section className="hero">
        <h1>Discover Pakistan's Finest Hotels</h1>
        <p>From the mountains of Gilgit-Baltistan to the shores of Karachi.</p>
        <div className="search-bar">
          <div>
            <label>City</label>
            <input type="text" placeholder="e.g. Lahore"
              value={city} onChange={e => setCity(e.target.value)} />
          </div>
          <div>
            <label>Check-in</label>
            <input type="date" value={checkin}
              onChange={e => setCheckin(e.target.value)} />
          </div>
          <div>
            <label>Check-out</label>
            <input type="date" value={checkout}
              onChange={e => setCheckout(e.target.value)} />
          </div>
          <div style={{ flex: 0 }}>
            <label style={{ visibility: 'hidden' }}>Go</label>
            <button className="lg-button" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        <div><h2>500+</h2><p>Hotels Listed</p></div>
        <div><h2>32</h2><p>Cities Covered</p></div>
        <div><h2>120K+</h2><p>Happy Guests</p></div>
        <div><h2>4.8 ★</h2><p>Average Rating</p></div>
      </div>

      <div className="page">
        <div className="section-header">
          <h2>Featured Hotels</h2>
          <p>Handpicked properties across Pakistan.</p>
        </div>
        <div className="card-container">
          {[
            { city: 'Lahore',    name: 'Pearl Continental', desc: 'Iconic 5-star luxury in the cultural capital.',   price: 18500, img: 'hotel-lahore.png' },
            { city: 'Islamabad', name: 'Serena Hotel',       desc: 'Elegant retreat in the green hills.',             price: 22000, img: 'hotel-islamabad.png' },
            { city: 'Karachi',   name: 'Movenpick Hotel',    desc: 'Contemporary luxury by the Arabian Sea.',         price: 20000, img: 'hotel-karachi.png' },
            { city: 'Murree',    name: 'Hotel Lockhart',     desc: 'Charming hill-station with pine forest views.',   price: 9500,  img: 'hotel-murree.png' },
            { city: 'Hunza',     name: 'Serena Hunza',       desc: 'Breathtaking mountain views in GB.',              price: 14000, img: 'hotel-hunza.png' },
            { city: 'Peshawar',  name: 'Pearl Continental',  desc: 'Gateway to KPK — heritage meets comfort.',       price: 12000, img: 'hotel-peshawar.png' },
          ].map((h, i) => (
            <div className="card" key={i}>
              <img src={`/images/${h.img}`} alt={h.name}
                style={{ width: '100%', height: 190, objectFit: 'cover' }}
                onError={e => {
                  (e.target as HTMLImageElement).style.background = '#C4A882';
                  (e.target as HTMLImageElement).removeAttribute('src');
                }} />
              <div>
                <span className="badge">{h.city}</span>
                <h3>{h.name}</h3>
                <p>{h.desc}</p>
                <div className="price-tag">
                  Rs {h.price.toLocaleString()} <span>/ night</span>
                </div>
                <button className="sm-button" style={{ marginTop: 14 }}
                  onClick={() => navigate('/services')}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}