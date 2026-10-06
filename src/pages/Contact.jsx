import { useState } from "react";

function Contact() {

  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="auth-page">

      <form className="auth-box" onSubmit={submit}>

        <h1>Contact Us</h1>

        <input
          placeholder="Your name"
          required
        />

        <input
          type="email"
          placeholder="Your email"
          required
        />

        <textarea
          placeholder="Your message"
          rows="5"
          required
        />

        <button>
          Send Message
        </button>

        {sent && (
          <p className="success">
            Message sent successfully!
          </p>
        )}

      </form>

    </section>
  );
}

export default Contact;