export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h1>PakStay</h1>
          <p>Pakistan's trusted hotel booking platform since 2020.</p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h2>Account</h2>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
          <a href="/dashboard">Dashboard</a>
        </div>
        <div>
          <h2>Contact</h2>
          <p>📞 +92-51-1234567</p>
          <p>✉️ support@pakstay.pk</p>
          <p>📍 Blue Area, Islamabad</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 PakStay. All rights reserved.</p>
        <p>Made with ❤️ in Pakistan</p>
      </div>
    </footer>
  );
}