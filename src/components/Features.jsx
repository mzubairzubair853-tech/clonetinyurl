const BoltIcon = () => (
  <svg viewBox="0 0 24 24" width="64" height="64" fill="#facc15" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" width="64" height="64" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
    <path d="M7 11V8a5 5 0 0 1 10 0v3" fill="none" />
    <rect x="5" y="11" width="14" height="10" rx="2" fill="#facc15" />
    <circle cx="12" cy="16" r="1.4" fill="#111827" />
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" width="64" height="64" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#fff" />
    <rect x="6" y="12" width="3" height="6" fill="#22c55e" />
    <rect x="10.5" y="8" width="3" height="10" fill="#ef4444" />
    <rect x="15" y="6" width="3" height="12" fill="#3b82f6" />
  </svg>
);

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" width="64" height="64" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
    <rect x="6" y="2" width="12" height="20" rx="2.5" fill="#1f2937" />
    <rect x="8" y="5" width="8" height="12" rx="1" fill="#0ea5e9" />
    <circle cx="12" cy="19.5" r="0.9" fill="#fff" stroke="none" />
  </svg>
);

const features = [
  {
    icon: <BoltIcon />,
    title: "Lightning Fast",
    text: "Generate short links instantly with our fast and simple platform.",
  },
  {
    icon: <LockIcon />,
    title: "Secure Links",
    text: "Your links are handled with security and reliability in mind.",
  },
  {
    icon: <ChartIcon />,
    title: "Link Analytics",
    text: "Track clicks and understand how your links perform.",
  },
  {
    icon: <MobileIcon />,
    title: "Mobile Friendly",
    text: "Create and manage your links from any device.",
  },
];

function Features() {
  return (
    <section className="features">
      {features.map((item, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;