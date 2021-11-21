import axios from "../../axios";
import { useEffect, useState } from "react";
import requests from "../../requests";
import styles from "./banner.module.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(string, numberOfChar) {
    return string?.length > numberOfChar
      ? string.substr(0, numberOfChar - 1) + "..."
      : string;
  }
  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.banner_contents}>
        <h2 className={styles.banner_title}>
          {movie?.name || movie?.title || movie?.original_title}
        </h2>
        <div className={styles.banner_buttons}>
          <button className={styles.banner_button}>Play</button>
          <button className={styles.banner_button}>My List</button>
        </div>
        <h3 className={styles.banner_description}>
          {truncate(movie?.overview, 150)}
        </h3>
      </div>
      <div className={styles.banner_fade} />
    </header>
  );
};

export default Banner;
