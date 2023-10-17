import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { resquestBackend } from "../../util/requests";
import { Moviess } from "../../types/movies";
import "./styles.css";

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  const [movie, setMovie] = useState<Moviess>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
    resquestBackend(config).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div className="base-card" style={{ borderRadius: "10px" }}>
      <div className="movie-details-container">
        <div className="image-detail">
          <img src={movie?.imgUrl} alt={movie?.title} />
        </div>
        <div className="main-movie-details-container-infos">
          <div className="movie-details-container-info">
            <h2>{movie?.title}</h2>
            <h4>{movie?.year}</h4>
            <p>{movie?.subTitle}</p>
          </div>
          <div className="movie-details-container-synopsis">
            {movie?.synopsis}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
