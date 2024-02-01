import { useState, useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import MovieCard from "../../Components/MovieCard/MovieCard";
import classes from "./Home.module.css";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState([]);
  async function movieDataFetch() {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      setMovieData(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    movieDataFetch();
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.movieContainer}>
        <h2>movies</h2>
        <h5>select the movie you want to view</h5>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loader />
          </div>
        ) : (
          <div className={classes.movieCardContainer}>
            {movieData.map((item) => {
              return (
                <MovieCard
                  id={item?.show.id}
                  key={item?.show.id}
                  image={
                    item?.show?.image?.original || item?.show?.image?.medium
                  }
                  name={item?.show?.name}
                  rating={item?.show?.rating?.average}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
