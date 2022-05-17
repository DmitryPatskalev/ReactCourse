import React, {useState} from "react";
import StarValue, {RatingValueType} from "./StarValue";


const StarRating = () => {
    const [rating, setRating] = useState<RatingValueType>(0)


    return <div >
        <h1>Rating</h1>
        <StarValue value={rating} onClick={setRating} />


        {/*<SwitchButton/>*/}

    </div>
}
export default StarRating