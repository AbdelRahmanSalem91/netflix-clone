import axios from "../../axios";
import { useState, useEffect } from "react";
import styles from "./movieRow.module.css";

const MovieRow = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <section className={styles.row}>
      <h2>{title}</h2>
      <section className={styles.row_posters}>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <img
                className={styles.row_poster}
                src={`${base_url}${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.original_title || movie?.title || movie?.name}
              />
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default MovieRow;
