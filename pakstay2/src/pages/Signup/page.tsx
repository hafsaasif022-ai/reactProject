import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', phone: '', password: '', confirm: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  function update(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    if (form.password !== form.confirm) { setMsg('Passwords do not match.'); return; }
    if (!form.fname || !form.email || !form.phone || !form.password) { setMsg('Please fill all required fields.'); return; }
    localStorage.setItem('pakstay-user', JSON.stringify({ name: `${form.fname} ${form.lname}`, email: form.email }));
    setMsg('Account created! Redirecting…');
    setTimeout(() => navigate('/dashboard'), 1500);
  }

  return (
    <div className="form-container" style={{ padding: '36px 20px' }}>
      <form onSubmit={handleSignup} style={{ maxWidth: 500 }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2>Create Your Account</h2>
          <p>Join thousands of travellers booking hotels across Pakistan.</p>
        </div>
        {msg && <div className="alert info">{msg}</div>}
        <div style={{ display: 'flex', gap: 14 }}>
          <div style={{ flex: 1 }}>
            <label>First Name *</label>
            <input type="text" placeholder="Ali"
              value={form.fname} onChange={e => update('fname', e.target.value)} required />
          </div>
          <div style={{ flex: 1 }}>
            <label>Last Name</label>
            <input type="text" placeholder="Khan"
              value={form.lname} onChange={e => update('lname', e.target.value)} />
          </div>
        </div>
        <div>
          <label>Email *</label>
          <input type="email" placeholder="ali@gmail.com"
            value={form.email} onChange={e => update('email', e.target.value)} required />
        </div>
        <div>
          <label>Phone *</label>
          <input type="tel" placeholder="+92-300-1234567"
            value={form.phone} onChange={e => update('phone', e.target.value)} required />
        </div>
        <div>
          <label>Password *</label>
          <input type="password" placeholder="Min. 8 characters"
            value={form.password} onChange={e => update('password', e.target.value)} required />
        </div>
        <div>
          <label>Confirm Password *</label>
          <input type="password" placeholder="Re-enter password"
            value={form.confirm} onChange={e => update('confirm', e.target.value)} required />
        </div>
        <button type="submit" className="lg-button"
          style={{ width: '100%', marginTop: 8, padding: 13 }}>
          Create Free Account
        </button>
        <p style={{ textAlign: 'center', marginTop: 18, fontSize: '0.88rem' }}>
          Already have an account? <Link to="/login">Login here →</Link>
        </p>
      </form>
    </div>
  );
}