import { useSearch } from "../../context/SearchContext";
import "./SearchResult.css";
const BASE_URL = "https://image.tmdb.org/t/p/original";

function SearchResult() {
  const { results, flag, loading } = useSearch();
  return (
    <div className="search-results">
      {loading && <p>loading...</p>}
      {flag &&
        results.map((item) => {
          return (
            <div className="movie-card">
              <img src={`${BASE_URL}${item.poster_path}`} alt={item.title} className="movie-poster"/>
            </div>
          );
        })}
    </div>
  );
}
export default SearchResult;
