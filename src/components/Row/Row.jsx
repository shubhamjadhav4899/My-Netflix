import axios from "../../Api/axios";
import requests from "../../Api/request";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import './Row.css'
import movieTrailer from "movie-trailer";
const API_KEY = "5fea41cdeba8da3908d979ecb8e95053";
const BASE_URL = "https://image.tmdb.org/t/p/original";
function Row({title,fetchUrl,isLarge}) {
  // let response=[]
  let [movies, setMovies] = useState([]);
  let [trailerUrl,setTrailerUrl]=useState("")
  console.log(requests.fetchActionMovies);
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, []);

  let handleClick=(movie)=>{
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie.title|| movie.name).then(
        url=>{
          const urlParams=new URLSearchParams(new URL(url).search)
          console.log(urlParams);
          setTrailerUrl(urlParams.get('v'));
        }
      ).catch((err)=>{
        console.log(err);
      })
    }
  }
  const opts={
    height: "390",
      width: "99%",
      playerVars: {
        autoplay: 0,
      },
  }
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((item) => {
          return (
              <img
                className={`row_poster ${isLarge&&"row_posterLarge"}`}
                src={`${BASE_URL}${item.poster_path}`}
                onClick={()=>{
                  handleClick(item)
                }}
                alt=""
              />
          );
        })}
      </div>
      <div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    </div>
  );
}

export default Row;
