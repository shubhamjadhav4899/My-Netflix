import Nav from './components/Nav'
import "./App.css";
import Main from "./components/Main";
import { SearchProvider } from "./context/SearchContext";
import SearchResult from './components/SearchResult'

function App() {
  
  return (
    <div className="App">
    <SearchProvider>
    <Nav/>
    <Main/>
    <SearchResult/>
    </SearchProvider>
    </div>
  );
}

export default App;
