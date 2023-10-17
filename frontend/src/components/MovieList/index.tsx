import "./styles.css";
import { Moviess } from "../../types/movies";
import { Link } from "react-router-dom";

type Props = {
  movie: Moviess;
};

const MovieList = ({ movie }: Props) => {
  return (
    <div className="col movie-list">
      <div key={movie.id} className="col-sm-auto col-xl-auto">
        <Link to={`/movies/${movie.id}`}>
          <div className="base-card infor-card">
            <div className="img">
              <img src={movie.imgUrl} alt="" />
            </div>
            <div className="card-info-details">
              <h2>{movie.title}</h2>
              <h4>{movie.year}</h4>
              <p>{movie.subTitle}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MovieList;
