import { useParams } from "react-router-dom";
import ReviewDetails from "../../components/ReviewDetails";
import "./styles.css";
import ReviewForm from "../../components/ReviewForm";

type UrlParams = {
  movieId: string;
};

const Review = () => {
  const { movieId } = useParams<UrlParams>();

  return (
    <>
      <div className="main-review-container">
        <h1>Tela detalhes do filme id: {movieId}</h1>
        <div className="base-card reviewform">
          <ReviewForm />
        </div>
        <div className="base-card">
          <ReviewDetails movieId={movieId ?? ""} />
        </div>
      </div>
    </>
  );
};

export default Review;
