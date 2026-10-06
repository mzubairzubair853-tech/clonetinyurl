import { Link } from "react-router-dom";

function Signup() {

  function handleSignup(e) {
    e.preventDefault();

    alert("Signup functionality can be connected to a backend.");
  }

  return (
    <section className="auth-section">

      <div className="auth-card">

        <h1>Create account</h1>

        <p>
          Start creating short links today
        </p>

        <form onSubmit={handleSignup}>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Your name"
            required
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="you@example.com"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create a password"
            required
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="auth-bottom">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </section>
  );
}

export default Signup;