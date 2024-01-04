import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <input
      value={search}
      placeholder="Search for products"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
