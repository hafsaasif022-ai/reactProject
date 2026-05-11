export default function Services() {
  const services = [
    { icon: '🏨', title: 'Hotel Booking',       desc: 'Instant booking at 500+ hotels with real-time availability.' },
    { icon: '✈️', title: 'Airport Transfer',    desc: 'AC vehicles for pick-up and drop from all major airports.' },
    { icon: '🍽️', title: 'Dining Reservations', desc: 'Reserve tables at hotel restaurants — local & international.' },
    { icon: '🗺️', title: 'Tour Packages',       desc: 'Curated packages to GB, Swat, Neelum Valley and more.' },
    { icon: '💍', title: 'Wedding & Events',    desc: 'Book entire hotel venues for weddings and gatherings.' },
    { icon: '🧘', title: 'Spa & Wellness',      desc: 'Pre-book spa treatments at partner hotels.' },
  ];

  return (
    <div className="page">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>End-to-end hospitality services tailored for Pakistani travellers.</p>
      </div>

      <div className="card-container">
        {services.map((s, i) => (
          <div className="card" key={i} style={{ textAlign: 'center', alignItems: 'center', padding: '30px 20px', width: 260 }}>
            <div style={{ fontSize: '2.8rem', marginBottom: 12 }}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="section-header" style={{ marginTop: 56 }}>
        <h2>Membership Plans</h2>
        <p>Unlock exclusive discounts and priority support.</p>
      </div>

      <div className="table-container">
        <table style={{ minWidth: 480, maxWidth: 860, margin: '0 auto' }}>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Free</th>
              <th>Plus — Rs499/mo</th>
              <th>Elite — Rs1499/mo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Hotel Bookings</td><td>✅ Unlimited</td><td>✅ Unlimited</td><td>✅ Unlimited</td></tr>
            <tr><td>Reward Points</td><td>❌</td><td>1pt / Rs100</td><td>2pts / Rs100</td></tr>
            <tr><td>Early Check-in</td><td>❌</td><td>On Request</td><td>✅ Guaranteed</td></tr>
            <tr><td>Cancellation</td><td>48 hrs notice</td><td>24 hrs notice</td><td>Free anytime</td></tr>
            <tr><td>Discounts</td><td>❌</td><td>Up to 10%</td><td>Up to 25%</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}