import { useNavigate } from "react-router-dom";
import classes from "./MovieCard.module.css";
const MovieCard = (props) => {
  const { id, name, image, rating } = props;
  const navigate = useNavigate();
  console.log(id, name, image, rating);
  const clickHandler = () => {
    navigate(`/movie/${id}`);
  };
  return (
    <>
      {image && (
        <div className={classes.container}>
          <img src={image} alt={name} />
          <div className={classes.info}>
            <h4>{name}</h4>
            <h5>{rating ? "⭐".concat(rating) : ""}</h5>
            <button onClick={clickHandler}>Click To View</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
