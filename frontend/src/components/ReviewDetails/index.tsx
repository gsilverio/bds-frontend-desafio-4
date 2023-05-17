import { Reviews } from "../../types/reviews";
import star from "../../assets/images/star.png";
import "./styles.css";

type Props = {
  movieId: string;
  reviewList: Reviews[];
};

const ReviewDetails = ({ movieId, reviewList }: Props) => {
  return (
    <>
      <div className="main-details-container">
        {reviewList.map((reviewList) => (
          <div className="details-container" key={reviewList.id}>
            <div id="detail-name">
              <img src={star} alt="" />
              <h1>{reviewList.user.name}</h1>
            </div>
            <p>{reviewList.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewDetails;
