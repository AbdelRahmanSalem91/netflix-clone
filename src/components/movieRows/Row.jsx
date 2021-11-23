import styles from "./movieRow.module.css";
import { SpinnerCircularSplit } from "spinners-react";
import { useState } from "react";

const Row = ({ title, movies, isLoading, isLargeRow }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <section className={styles.row}>
      <h2 className={styles.row_title}>{title}</h2>
      <section className={styles.row_posters}>
        {isLoading ? (
          movies.map(
            (movie) =>
              ((isLargeRow && movie?.poster_path) ||
                (!isLargeRow && movie?.backdrop_path)) && (
                <div className={styles.movie_row} key={movie.id}>
                  <img
                    className={`${styles.row_poster} ${
                      isLargeRow && styles.row_posterLarge
                    }`}
                    src={`${base_url}${
                      isLargeRow ? movie?.poster_path : movie?.backdrop_path
                    }`}
                    alt={movie?.original_title || movie?.title || movie?.name}
                  />
                </div>
              )
          )
        ) : (
          <>
            <div className={styles.loading}>
              <span>Loading...</span>
              <br />
              <SpinnerCircularSplit
                size={30}
                thickness={180}
                speed={177}
                color="#36ad47"
                secondaryColor="rgba(0, 0, 0, 0.44)"
              />
            </div>
          </>
        )}
      </section>
    </section>
  );
};

export default Row;
