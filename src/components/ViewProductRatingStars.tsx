const numberOfStars: Array<number> = [1, 2, 3, 4, 5] 
import starIcon from "../assets/star.svg"

const ViewProductRatingStars = () => (
    <>
        {numberOfStars.map((index) => (
            <img key={index} src={starIcon} alt="rating star" className="ratingStars" />
        ))}
    </>
    
)

export {ViewProductRatingStars}