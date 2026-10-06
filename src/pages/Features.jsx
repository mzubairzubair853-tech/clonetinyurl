import FeatureCard from "../components/FeatureCard";
import FeatureCards from "../components/Features";
function Features() {
  return (
    <section className="page-section">

      <div className="page-header">

        <span>FEATURES</span>

        <h1>
          Powerful tools for your links
        </h1>

        <p>
          Everything you need to create, manage and share
          better links.
        </p>

      </div>

      <div className="features-grid">

        <FeatureCard
          icon="🔗"
          title="Short Links"
          description="Turn long URLs into clean and memorable short links."
        />

        <FeatureCard
          icon="📈"
          title="Analytics"
          description="Monitor clicks and understand your audience."
        />

        <FeatureCard
          icon="🎯"
          title="Custom Links"
          description="Create links that are easy to remember and share."
        />

        <FeatureCard
          icon="🛡️"
          title="Secure"
          description="Built with security and reliability in mind."
        />

        <FeatureCard
          icon="🌎"
          title="Global Access"
          description="Share your links with people anywhere in the world."
        />

        <FeatureCard
          icon="📱"
          title="Responsive"
          description="Works smoothly on phones, tablets and desktops."
        />

      </div>

    </section>
  );
}

export default Features;