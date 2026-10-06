function UrlInput({ value, setValue }) {
  return (
    <label className="field url-field">

      <span>Long URL</span>

      <input
        type="url"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="https://example.com/your-long-url"
      />

    </label>
  );
}

export default UrlInput;