import { useParams } from "react-router-dom";
import ReviewDetails from "../../components/ReviewDetails";
import "./styles.css";
import ReviewForm from "../../components/ReviewForm";

import { isMember, resquestBackend } from "../../util/requests";
import { Reviews } from "../../types/reviews";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import Select from "react-select";

type UrlParams = {
  movieId: string;
};

const Review = () => {
  
  const { movieId } = useParams<UrlParams>();
  const [review, setReview] = useState<Reviews[]>([]);
  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    resquestBackend(params).then((response) => {
      setReview(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (reviews: Reviews) => {
    const clone = [...review];
    clone.push(reviews);
    setReview(clone);
  };
  return (
    <>
      <div className="main-review-container">

        <h1>Tela detalhes do filme id: {movieId}</h1>
        {isMember() && (
          <div className="base-card reviewform">
            <ReviewForm
              movieId={movieId ?? ""}
              onInsertReview={handleInsertReview}
            />
          </div>
          
        )}
        <div className="base-card">
          <ReviewDetails movieId={movieId ?? ""} reviewList={review} />
        </div>
      </div>
    </>
  );
};

export default Review;
