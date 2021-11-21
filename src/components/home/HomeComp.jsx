import MovieRow from "../movieRows/MovieRow";
import Navbar from "../../shared/navbar/Navbar";
import Banner from "../../shared/banner/Banner";
import requests from "../../requests";

const HomeComp = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <MovieRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
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
