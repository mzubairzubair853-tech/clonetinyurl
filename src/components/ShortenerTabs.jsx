function ShortenerTabs({ activeTab, setActiveTab }) {
  return (
    <div className="shortener-tabs">

      <button
        className={activeTab === "shorten" ? "active" : ""}
        onClick={() => setActiveTab("shorten")}
      >
        🔗 Shorten Link
      </button>

      <button
        className={activeTab === "qr" ? "active" : ""}
        onClick={() => setActiveTab("qr")}
      >
        ▦ QR Code
      </button>

    </div>
  );
}

export default ShortenerTabs;