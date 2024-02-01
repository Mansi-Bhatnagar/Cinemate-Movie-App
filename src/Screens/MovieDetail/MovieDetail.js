import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import Loader from "../../Components/Loader/Loader";
import classes from "./MovieDetail.module.css";
const MovieDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState({});
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [genre, setGenre] = useState([]);
  async function movieDataFetch() {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      setMovieData(data?.filter((item) => item?.show?.id === +id));
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    movieDataFetch();
  }, []);
  useEffect(() => {
    console.log(movieData);

    if (!isLoading && movieData) {
      setName(movieData[0]?.show?.name);
      setRating(movieData[0]?.show?.rating?.average);
      setImage(
        movieData[0]?.show?.image?.original || movieData[0]?.show?.image?.medium
      );
      setSummary(movieData[0]?.show?.summary);
      setLink(movieData[0]?.show?.url);
      setGenre(movieData[0]?.show?.genres);
    }
  }, [movieData, isLoading]);
  const bookMovieHandler = () => {};
  return (
    <div className={classes.container}>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "inherit",
          }}
        >
          <Loader />
        </div>
      ) : (
        <>
          <img src={image} alt={name} />
          <div className={classes.info}>
            {name && <h2>{name + " "}</h2>}
            <span>{rating ? "Rating: ⭐".concat(rating) : ""}</span>
            {genre && <h4>{genre?.join(", ")}</h4>}
            <div className={classes.summary}>
              {summary ? parse(summary) : ""}
            </div>
            <div className={classes.buttons}>
              <button className={classes.bookNow} onClick={bookMovieHandler}>
                Book Now
              </button>
              {link && (
                <button className={classes.watchNow}>
                  <a href={link}>Watch Now</a>
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
