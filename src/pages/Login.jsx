import { Link } from "react-router-dom";

function Login() {

  function handleLogin(e) {
    e.preventDefault();

    alert("Login functionality can be connected to a backend.");
  }

  return (
    <section className="auth-section">

      <div className="auth-card">

        <h1>Welcome back</h1>

        <p>
          Login to your QuickLink account
        </p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="auth-bottom">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </div>

    </section>
  );
}

export default Login;