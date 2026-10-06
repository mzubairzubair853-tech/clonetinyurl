import { Link } from "react-router-dom";

function PricingCard({
  title,
  price,
  description,
  features,
  popular
}) {
  return (
    <div className={popular ? "pricing-card popular" : "pricing-card"}>

      {popular && (
        <div className="popular-label">
          MOST POPULAR
        </div>
      )}

      <h2>{title}</h2>

      <p>{description}</p>

      <div className="price">
        ${price}
        <span>/month</span>
      </div>

      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            ✓ {feature}
          </li>
        ))}
      </ul>

      <Link to="/signup" className="pricing-btn">
        Get Started
      </Link>

    </div>
  );
}

export default PricingCard;