import React from "react";
import StarValue from "./StarValue";

const StarRating = () => {
    return <div>
        <h1>Rating</h1>
        <StarValue value={1}/>
        <StarValue value={2}/>
        <StarValue value={3}/>
        <StarValue value={4}/>
        <StarValue value={5}/>
    </div>
}
export default StarRating