function RecentLinks({ links }) {
  if (!links || links.length === 0) {
    return (
      <div className="recent-links">
        <h3>Recent Links</h3>
        <p>No links created yet.</p>
      </div>
    );
  }

  return (
    <div className="recent-links">

      <div className="recent-header">
        <h3>Recent Links</h3>
        <span>{links.length} links</span>
      </div>

      <div className="recent-list">

        {links.map((link) => (
          <div className="recent-item" key={link.id}>

            <div>
              <strong>{link.shortUrl}</strong>
              <p>{link.originalUrl}</p>
            </div>

            <button
              onClick={() =>
                navigator.clipboard.writeText(link.shortUrl)
              }
            >
              Copy
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentLinks;