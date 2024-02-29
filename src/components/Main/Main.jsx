import Row from "../Row";
import request from "../../Api/request";
import { useSearch } from "../../context/SearchContext";
import Banner from "../Banner";
function Main() {
  const { flag } = useSearch();
  return flag ? (
    <div></div>
  ) : (
    <div>
        <Banner/>
      <Row
        title="Netflix Original"
        isLarge 
        fetchUrl={request.fetchNetflixOriginal}
      />
      <Row title="Trending" fetchUrl={request.fetchTrendincg} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}
export default Main;
