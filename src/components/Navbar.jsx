import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          Quick<span>Link</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
        </nav>

        <div className="nav-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;