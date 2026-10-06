function DomainSelector({ value, setValue }) {
  return (
    <label className="field small-field">

      <span>Domain</span>

      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="quickurl.com">quickurl.com</option>
        <option value="goquick.link">goquick.link</option>
        <option value="qurl.pk">qurl.pk</option>
      </select>

    </label>
  );
}

export default DomainSelector;