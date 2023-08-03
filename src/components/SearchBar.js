let SearchBar = ({ search, stocks, setSearch, setStocks }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <form>
        <input
          type="text"
          name="name"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={stocks}
            onChange={(e) => setStocks(e.target.checked)}
          />{" "}
          Show only stocked products
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
