import "./Search.css";
import { useSearch } from "../../context/SearchContext";
function Search() {
  const { search, flag, query, setFlag, setQuery, setResult } = useSearch();
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const cancelSearch = () => {
    setQuery("");
    setFlag(!flag);
    setResult([]);
  };

  const handleSubmit = () => {
    if (query) {
      search();
    }
  };
  return (
    <div className="search-form">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search For Movie"
        className="search-input"
      />
      {flag && (
        <button type="buttom" className="cancel-button" onClick={cancelSearch}>
          X
        </button>
      )}
      {!flag && (
        <button type="buttom" className="search-button" onClick={handleSubmit}>
          search
        </button>
      )}
    </div>
  );
}
export default Search;
