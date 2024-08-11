import { ViewProductRatingStars } from "./ViewProductRatingStars"
import { ratingNumber, numberOfRatings } from "./constants/products"
import "./css/ViewProduct.css"

function ViewProductReviewSection() {
  return (
    <div className="reviewSection">
        <div className="reviewHeaderContainer">
          <h2 className="ratingNumber">{ratingNumber}</h2>
          <div className="ratingStarsContainer">
            <ViewProductRatingStars/>
            <p className="ratingText">({numberOfRatings} reviews)</p>
          </div>
        </div>

        <div className="reviewContainer">
          <div className="individualReviewContainer">
            <div className="reviewNameAndDateContainer">
              <p className="reviewName">Mark</p>
              <p className="reviewDate">20 Dec, 2023</p>
            </div>

            <div className="reviewTextAndStars">
              <p className="reviewText">Good product!</p>
              <ViewProductRatingStars/>
            </div>
          </div>

          <div className="individualReviewContainer">
            <div className="reviewNameAndDateContainer">
                <p className="reviewName">Jane</p>
                <p className="reviewDate">21 Jan, 2024</p>
            </div>

            <div className="reviewTextAndStars">
              <p className="reviewText">Great quality.</p>
              <ViewProductRatingStars/>
            </div>
          </div>

          <div className="individualReviewContainer">
            <div className="reviewNameAndDateContainer">
              <p className="reviewName">George</p>
              <p className="reviewDate">11 Feb, 2024</p>
            </div>

            <div className="reviewTextAndStars">
              <p className="reviewText">Very comfortable to use.</p>
              <ViewProductRatingStars/>
            </div>
          </div>
        </div>
        <button className="writeReviewBtn">Write a review</button>
      </div>
  )
}

export default ViewProductReviewSection