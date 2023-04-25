import { useEffect, useState } from "react";
import { Reviews } from "../../types/reviews";
import { resquestBackend } from "../../util/requests";
import { AxiosRequestConfig } from "axios";
import star from "../../assets/images/star.png";
import "./styles.css";
type Props = {
  movieId: string;
};

const ReviewDetails = ({ movieId }: Props) => {
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

  return (
    <>
      <div className="main-details-container">
        {review.map((review) => (
          <div className="details-container" key={review.id}>
            <div id="detail-name">
              <img src={star} alt="" />
              <h1>{review.user.name}</h1>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default ReviewDetails;
