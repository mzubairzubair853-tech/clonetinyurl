import UrlShortener from "../components/UrlShortener";
import FeatureCard from "../components/FeatureCard";
import { BoltIcon, LockIcon, ChartIcon, MobileIcon } from "../components/Icons";
function Home() {
  return (
    <>

      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            🚀 Fast & Simple URL Shortener
          </div>

          <h1>
            Make your links
            <span> shorter & smarter.</span>
          </h1>

          <p>
            Create short, memorable and easy-to-share links
            in seconds.
          </p>

          <UrlShortener />

        </div>

      </section>


      <section className="features-section">

        <div className="section-heading">

          <span>POWERFUL FEATURES</span>

          <h2>
            Everything you need
            <br />
            for your links
          </h2>

          <p>
            Simple tools that make sharing links faster and easier.
          </p>

        </div>


        <div className="features-grid">

          <FeatureCard
            icon={<BoltIcon />}
            title="Lightning Fast"
            description="Generate short links instantly with our fast and simple platform."
          />

          <FeatureCard
            icon={<LockIcon />}
            title="Secure Links"
            description="Your links are handled with security and reliability in mind."
          />

          <FeatureCard
            icon={<ChartIcon />}
            title="Link Analytics"
            description="Track clicks and understand how your links perform."
          />

          <FeatureCard
          	icon={<MobileIcon />}
            title="Mobile Friendly"
            description="Create and manage your links from any device."
          />

        </div>

      </section>


      <section className="cta-section">

        <h2>
          Ready to shorten your links?
        </h2>

        <p>
          Start creating short links today.
        </p>

      </section>

    </>
  );
}

export default Home;