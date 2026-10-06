import { useEffect, useState } from "react";
import ShortenerTabs from "./ShortenerTabs";
import UrlInput from "./UrlInput";
import DomainSelector from "./DomainSelector";
import AliasInput from "./AliasInput";
import RecentLinks from "./RecentLinks";

function UrlShortener() {
  const [activeTab, setActiveTab] = useState("shorten");

  const [url, setUrl] = useState("");
  const [domain, setDomain] = useState("quickurl.com");
  const [alias, setAlias] = useState("");

  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const [recentLinks, setRecentLinks] = useState([]);

  // Load previous links
  useEffect(() => {
    const savedLinks = localStorage.getItem("quickurl_links");

    if (savedLinks) {
      setRecentLinks(JSON.parse(savedLinks));
    }
  }, []);

  // Save links
  useEffect(() => {
    localStorage.setItem(
      "quickurl_links",
      JSON.stringify(recentLinks)
    );
  }, [recentLinks]);

  // Create short URL
  const handleShorten = () => {
    if (!url.trim()) {
      alert("Please enter a long URL.");
      return;
    }

    try {
      new URL(url);
    } catch {
      alert("Please enter a valid URL.");
      return;
    }

    const randomCode =
      Math.random().toString(36).substring(2, 8);

    const finalAlias =
      alias.trim() || randomCode;

    const generatedUrl =
      `https://${domain}/${finalAlias}`;

    const newLink = {
      id: Date.now(),
      originalUrl: url,
      shortUrl: generatedUrl,
      alias: finalAlias,
      domain: domain,
      createdAt: new Date().toLocaleString(),
    };

    setShortUrl(generatedUrl);

    setRecentLinks((previousLinks) => [
      newLink,
      ...previousLinks,
    ]);

    setCopied(false);
  };

  // Copy short URL
  const handleCopy = async () => {
    if (!shortUrl) return;

    try {
      await navigator.clipboard.writeText(shortUrl);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch {
      alert("Unable to copy the link.");
    }
  };

  // Generate QR placeholder
  const qrCodeUrl = shortUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
        shortUrl
      )}`
    : "";

  return (
    <div className="url-shortener-wrapper">

      {/* Main Shortener Card */}
      <div className="url-shortener-card">

        <ShortenerTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* SHORTEN TAB */}
        {activeTab === "shorten" && (
          <div className="shortener-content">

            <div className="shortener-heading">
              <div>
                <h2>Shorten a Long URL</h2>

                <p>
                  Create a short, memorable link in seconds.
                </p>
              </div>

              {/* Image */}
              <div className="shortener-image">
                <img
                  src="/images/url-shortener.png"
                  alt="URL Shortener"
                />
              </div>
            </div>

            <UrlInput
              value={url}
              setValue={setUrl}
            />

            <div className="shortener-row">

              <DomainSelector
                value={domain}
                setValue={setDomain}
              />

              <AliasInput
                value={alias}
                setValue={setAlias}
              />

            </div>

            <button
              className="shorten-button"
              onClick={handleShorten}
            >
              🔗 Shorten Link
            </button>

            {/* Result */}
            {shortUrl && (
              <div className="short-url-result">

                <div>
                  <span>Your Short Link</span>

                  <strong>
                    {shortUrl}
                  </strong>
                </div>

                <button
                  className="copy-button"
                  onClick={handleCopy}
                >
                  {copied ? "✓ Copied" : "Copy"}
                </button>

              </div>
            )}

          </div>
        )}

        {/* QR TAB */}
        {activeTab === "qr" && (
          <div className="qr-section">

            <div className="qr-text">

              <h2>Generate a QR Code</h2>

              <p>
                First create a short link and then
                generate its QR code.
              </p>

              {!shortUrl && (
                <div className="qr-warning">
                  ⚠️ Create a short link first.
                </div>
              )}

              {shortUrl && (
                <>
                  <div className="qr-box">
                    <img
                      src={qrCodeUrl}
                      alt="QR Code"
                    />
                  </div>

                  <strong>
                    {shortUrl}
                  </strong>

                  <button
                    className="copy-button"
                    onClick={handleCopy}
                  >
                    {copied ? "✓ Copied" : "Copy Link"}
                  </button>
                </>
              )}

            </div>

            {/* QR Image / Illustration */}
            <div className="qr-image">

              <img
                src="/images/qr-code-illustration.png"
                alt="QR Code Illustration"
              />

            </div>

          </div>
        )}

      </div>

      {/* Recent Links */}
      <RecentLinks
        links={recentLinks}
      />

    </div>
  );
}

export default UrlShortener;