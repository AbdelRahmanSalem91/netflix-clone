import axios from "../../axios";
import { useState, useEffect } from "react";
import styles from "./movieRow.module.css";
import { SpinnerCircularSplit } from "spinners-react";
import Row from "./Row";

const MovieRow = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setIsLoading(true);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <Row
      title={title}
      movies={movies}
      isLoading={isLoading}
      isLargeRow={isLargeRow}
    />
  );
};

export default MovieRow;
