import React, {useState} from "react";
import StarValue, { StarRatingType} from "./StarValue";


const StarRating = () => {
    const [rating, setRating] = useState<StarRatingType>(0)

    return <div >
        <h3>Rating</h3>
        <StarValue value={rating} onClick={setRating} />

        {/*<SwitchButton/>*/}
    </div>
}
export default StarRating