import React, { useState } from "react";

const StarRating = ({ onRate, userRating }) => {
  const [hoverRating, setHoverRating] = useState(0); 

  const handleClick = (rating) => {
    onRate(rating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} style={{ cursor: "pointer", color: star <= (hoverRating || userRating) ? "#ffd700" : "#ccc" }} onClick={() => handleClick(star)} 
          onMouseEnter={() => setHoverRating(star)} 
          onMouseLeave={() => setHoverRating(0)} 
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;