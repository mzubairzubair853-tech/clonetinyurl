function AliasInput({ value, setValue }) {
  return (
    <label className="field small-field">

      <span>
        Alias <em>(optional)</em>
      </span>

      <input
        type="text"
        value={value}
        onChange={(e) =>
          setValue(e.target.value.replace(/\s/g, "-"))
        }
        placeholder="my-link"
      />

    </label>
  );
}

export default AliasInput;