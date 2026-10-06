function LinkCard({ link }) {
  return (
    <div className="link-card">

      <div>
        <strong>{link.short}</strong>
        <p>{link.original}</p>
      </div>

      <div className="link-stats">
        <span>Clicks: {link.clicks}</span>
        <span>{link.date}</span>
      </div>

    </div>
  );
}

export default LinkCard;