import { createContext, useState, useContext } from "react";
import axios from "../Api/axios";
import request from "../Api/request";
const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};
export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [results, setResult] = useState([]);
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);

  const search = () => {
    axios.get(`${request.search}&query=${query}`).then((respone) => {
      setResult(respone.data.results);
      setFlag(!flag);
      setLoading(!loading)
      //   console.log(results);
    });
  };
  return (
    <SearchContext.Provider
      value={{ query, results, flag, search, setFlag, setQuery, setResult }}
    >
      {children}
    </SearchContext.Provider>
  );
};
