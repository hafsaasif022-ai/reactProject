import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="page">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>Our team is available 24/7 to help with bookings and travel advice.</p>
      </div>

      <div className="card-container" style={{ marginBottom: 40 }}>
        {[
          { icon: '📞', title: 'Phone',    info: '+92-51-1234567',      sub: 'Mon–Sun, 8am–10pm PKT' },
          { icon: '✉️', title: 'Email',    info: 'support@pakstay.pk',  sub: 'Response within 2 hours' },
          { icon: '📱', title: 'WhatsApp', info: '+92-300-9876543',     sub: 'Quick replies, 24/7' },
          { icon: '📍', title: 'Office',   info: 'Blue Area, Islamabad', sub: 'Pakistan — 44000' },
        ].map((c, i) => (
          <div className="card" key={i} style={{ textAlign: 'center', alignItems: 'center', padding: '26px 20px', width: 220 }}>
            <div style={{ fontSize: '2rem', marginBottom: 8 }}>{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.info}</p>
            <p style={{ fontSize: '0.82rem' }}>{c.sub}</p>
          </div>
        ))}
      </div>

      <div className="form-container" style={{ padding: 0 }}>
        <form onSubmit={handleSubmit} style={{ maxWidth: 600, width: '100%' }}>
          <h3 style={{ marginBottom: 20 }}>Send Us a Message</h3>
          {sent && <div className="alert success">Message sent! We'll reply within 2 hours. شکریہ!</div>}
          <div style={{ display: 'flex', gap: 14 }}>
            <div style={{ flex: 1 }}>
              <label>Full Name *</label>
              <input type="text" placeholder="Ali Khan" required />
            </div>
            <div style={{ flex: 1 }}>
              <label>Phone *</label>
              <input type="tel" placeholder="+92-300-1234567" required />
            </div>
          </div>
          <div>
            <label>Email *</label>
            <input type="email" placeholder="ali@example.com" required />
          </div>
          <div>
            <label>Subject</label>
            <select>
              <option>Booking Inquiry</option>
              <option>Cancellation Request</option>
              <option>Refund Request</option>
              <option>General Question</option>
            </select>
          </div>
          <div>
            <label>Message *</label>
            <textarea placeholder="Describe your inquiry…" required></textarea>
          </div>
          <button type="submit" className="lg-button" style={{ width: '100%', marginTop: 8 }}>
            Send Message 📩
          </button>
        </form>
      </div>
    </div>
  );
}