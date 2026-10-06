import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            Quick<span>Link</span>
          </h2>

          <p>
            Simple, fast and reliable link shortening for everyone.
          </p>
        </div>

        <div className="footer-column">
          <h3>Product</h3>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
        </div>

        <div className="footer-column">
          <h3>Account</h3>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>

      </div>

      <div className="copyright">
        © 2026 QuickLink. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;