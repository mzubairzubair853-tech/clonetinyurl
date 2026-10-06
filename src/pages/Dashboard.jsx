import { useEffect, useState } from "react";
import LinkCard from "../components/LinkCard.jsx";

function Dashboard() {

  const [links, setLinks] = useState([]);

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("quickLinks")) || [];

    setLinks(saved);

  }, []);

  const clearLinks = () => {

    localStorage.removeItem("quickLinks");

    setLinks([]);
  };

  return (
    <section className="dashboard">

      <div className="dashboard-header">

        <div>
          <span>DASHBOARD</span>

          <h1>
            Your Links
          </h1>

          <p>
            Manage all your shortened URLs.
          </p>
        </div>

        <button onClick={clearLinks}>
          Clear History
        </button>

      </div>

      <div className="dashboard-stats">

        <div>
          <strong>{links.length}</strong>
          <span>Total Links</span>
        </div>

        <div>
          <strong>
            {links.reduce(
              (total, link) => total + link.clicks,
              0
            )}
          </strong>
          <span>Total Clicks</span>
        </div>

      </div>

      <div className="links-list">

        {links.length === 0 ? (

          <div className="empty-state">
            <h2>No links yet</h2>
            <p>
              Create your first shortened link from the homepage.
            </p>
          </div>

        ) : (

          links.map((link, index) => (
            <LinkCard
              key={index}
              link={link}
            />
          ))

        )}

      </div>

    </section>
  );
}

export default Dashboard;