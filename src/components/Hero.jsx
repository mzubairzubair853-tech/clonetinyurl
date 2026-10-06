import { useState } from "react";

function Hero() {
  const [tab, setTab] = useState("link");
  const [longUrl, setLongUrl] = useState("");
  const [domain, setDomain] = useState("tinyurl.com");
  const [alias, setAlias] = useState("");

  const handleSubmit = () => {
    console.log({ longUrl, domain, alias });
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          URL Shortener, Branded Short Links &amp; Analytics
        </h1>

        <p>
          Welcome to the original link shortener, simplifying the Internet
          through the power of the URL since 2002.
        </p>

        <p>
          You can use branded domains for fully custom links, track link
          analytics, and enjoy other powerful features with our paid plans.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-light">View Plans</button>
          <button className="btn btn-teal">Create Free Account</button>
        </div>

        <h3 className="recent-title">Your Recent Links:</h3>
      </div>

      <div className="hero-card">
        <div className="card-tabs">
          <button
            className={tab === "link" ? "tab active" : "tab"}
            onClick={() => setTab("link")}
          >
            Shorten a Link
          </button>
          <button
            className={tab === "qr" ? "tab active" : "tab"}
            onClick={() => setTab("qr")}
          >
            Generate QR Code
          </button>
        </div>

        <div className="card-body">
          <label className="field-label">
            Long URL <span className="required">*</span>
          </label>
          <input
            className="field-input"
            type="text"
            placeholder="Paste long URL here"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />

          {tab === "link" && (
            <div className="row">
              <div className="col">
                <label className="field-label">Domain</label>
                <select
                  className="field-input"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                >
                  <option>tinyurl.com</option>
                  <option>tiny.one</option>
                  <option>rotf.lol</option>
                </select>
              </div>

              <span className="slash">/</span>

              <div className="col">
                <label className="field-label">Alias (optional)</label>
                <input
                  className="field-input"
                  type="text"
                  placeholder="Add alias here"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                />
                <small className="hint">Must be at least 5 characters</small>
              </div>
            </div>
          )}

          <button className="btn-green" onClick={handleSubmit}>
            {tab === "link" ? "Shorten Link" : "Generate QR Code"}
          </button>

          <p className="terms">
            By clicking Shorten Link, you agree with our{" "}
            <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a>,
            and <a href="#">Use of Cookies</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;