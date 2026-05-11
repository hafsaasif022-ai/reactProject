import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Booking {
  id: string;
  hotel: string;
  city: string;
  checkin: string;
  checkout: string;
  price: number;
  status: string;
}

export default function Dashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [userName, setUserName] = useState('Guest');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('pakstay-user') || '{}');
    if (user.name) setUserName(user.name);
    setBookings(JSON.parse(localStorage.getItem('pakstay-bookings') || '[]'));
  }, []);

  const totalSpent = bookings.reduce((s, b) => {
    const n = Math.round((new Date(b.checkout).getTime() - new Date(b.checkin).getTime()) / 86400000) || 1;
    return s + n * b.price;
  }, 0);

  return (
    <div className="page" style={{ paddingTop: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
        <div>
          <h2 style={{ margin: 0 }}>Welcome back, {userName} 👋</h2>
          <p style={{ margin: '4px 0 0' }}>Here's your PakStay overview.</p>
        </div>
        <Link to="/services"><button className="lg-button">+ New Booking</button></Link>
      </div>

      <div className="widget-row">
        <div className="widget">
          <h4>Total Bookings</h4>
          <h2>{bookings.length}</h2>
        </div>
        <div className="widget" style={{ borderLeftColor: 'var(--brand-secondary-color)' }}>
          <h4>Confirmed</h4>
          <h2>{bookings.filter(b => b.status === 'Confirmed').length}</h2>
        </div>
        <div className="widget" style={{ borderLeftColor: 'var(--brand-primary-color)' }}>
          <h4>Total Spent</h4>
          <h2 style={{ fontSize: '1.3rem' }}>Rs {totalSpent.toLocaleString()}</h2>
        </div>
        <div className="widget" style={{ borderLeftColor: '#28A745' }}>
          <h4>Reward Points</h4>
          <h2>{Math.floor(totalSpent / 100).toLocaleString()}</h2>
        </div>
      </div>

      <div className="layout-with-sidebar">
        <aside className="sidebar">
          <h4 style={{ padding: '6px 14px 4px', color: 'var(--text-muted-color)' }}>Navigation</h4>
          <Link to="/dashboard" className="active">📊 Overview</Link>
          <Link to="/services">🏨 Browse Hotels</Link>
          <Link to="/services">💎 Services</Link>
          <Link to="/contact">📞 Support</Link>
          <hr style={{ borderColor: 'var(--border-muted-color)', margin: '8px 0' }} />
          <Link to="/login">🚪 Logout</Link>
        </aside>
        <div className="main-content">
          <h3 style={{ marginBottom: 12 }}>Recent Bookings</h3>
          <div className="table-container">
            <table style={{ minWidth: 520 }}>
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Hotel</th>
                  <th>City</th>
                  <th>Check-In</th>
                  <th>Check-Out</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length === 0
                  ? <tr><td colSpan={6} className="table-empty">No bookings yet. <Link to="/services">Browse hotels →</Link></td></tr>
                  : bookings.slice().reverse().slice(0, 5).map(b => (
                    <tr key={b.id}>
                      <td>{b.id}</td>
                      <td>{b.hotel}</td>
                      <td>{b.city}</td>
                      <td>{b.checkin}</td>
                      <td>{b.checkout}</td>
                      <td><span className={`status-pill ${b.status === 'Confirmed' ? 'confirmed' : 'cancelled'}`}>{b.status}</span></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}