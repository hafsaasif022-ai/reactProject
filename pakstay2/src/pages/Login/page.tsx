import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) { setMsg('Please fill in all fields.'); return; }
    localStorage.setItem('pakstay-user', JSON.stringify({ email }));
    setMsg('Logging you in…');
    setTimeout(() => navigate('/dashboard'), 1200);
  }

  return (
    <div className="form-container" style={{ minHeight: 'calc(100vh - 66px)' }}>
      <form onSubmit={handleLogin} style={{ maxWidth: 440 }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2>Welcome Back</h2>
          <p>Log in to manage your bookings across Pakistan.</p>
        </div>
        {msg && <div className="alert info">{msg}</div>}
        <div>
          <label>Email Address *</label>
          <input type="email" placeholder="you@example.com"
            value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password *</label>
          <input type="password" placeholder="Enter your password"
            value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="lg-button"
          style={{ width: '100%', padding: 13 }}>
          Login to PakStay
        </button>
        <p style={{ textAlign: 'center', marginTop: 20, fontSize: '0.88rem' }}>
          Don't have an account? <Link to="/signup">Create one free →</Link>
        </p>
      </form>
    </div>
  );
}