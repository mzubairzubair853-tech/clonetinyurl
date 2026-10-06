function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "For personal use",
      features: [
        "Unlimited short links",
        "Basic analytics",
        "Mobile friendly",
      ],
    },
    {
      name: "Pro",
      price: "$9",
      description: "For growing businesses",
      features: [
        "Everything in Free",
        "Advanced analytics",
        "Custom links",
        "Priority support",
      ],
    },
    {
      name: "Business",
      price: "$29",
      description: "For teams and businesses",
      features: [
        "Everything in Pro",
        "Team management",
        "Advanced reports",
        "Premium support",
      ],
    },
  ];

  return (
    <section className="page-section">
      <div className="page-header">
        <span>PRICING</span>

        <h1>Choose the right plan</h1>

        <p>
          Start free and upgrade when you need more.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div className="pricing-card" key={plan.name}>
            <h2>{plan.name}</h2>

            <p>{plan.description}</p>

            <div className="price">
              {plan.price}
              <small>/month</small>
            </div>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <button>Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;