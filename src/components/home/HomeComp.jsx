import MovieRow from "../movieRows/MovieRow";
import Navbar from "../../shared/navbar/Navbar";
import Banner from "../../shared/banner/Banner";
import styles from "./homeComp.module.css";
import { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";

const HomeComp = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(request.data.results);
    }
    fetchData();
  }, []);
  console.log(movies[0]?.genre_ids, movies[0]?.title, movies[0]?.name);
  return (
    <div>
      <Navbar />
      <Banner />
      <MovieRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <MovieRow title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Action" fetchUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy" fetchUrl={requests.fetchComedynMovies} />
      <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeComp;
