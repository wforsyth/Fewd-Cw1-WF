import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Checkbox from "./Checkbox";
import StarRating from "./Stars";

const StyledItem = ({ item, index, onToggleInterest, isInterested }) => {
  const [userRating, setUserRating] = useState(0);

  const averageRatingCalculator = (ratings) =>{
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return (sum/ratings.length).toFixed(1);
  }

  const averageRating = averageRatingCalculator(item.ratings);

  const handleRating = (rating) =>{
    setUserRating(rating);
  }

  return (
    <>
      <Accordion.Header> {item.title}</Accordion.Header>
      <Accordion.Body>
        <p><strong>Speaker:</strong> {item.speaker}</p>
        <p><strong>Description:</strong> {item.description}</p>
        <p><strong>Session:</strong> {item.session}</p>
        <p><strong>Time:</strong> {item.time}</p>
        <p><strong>Tags:</strong> {item.tags.join(", ")}</p>
        <p><strong>Average Rating:</strong> {averageRating}</p>

        <div>
          <strong>
            Your Rating:
          </strong>
          <StarRating userRating={userRating} onRate={handleRating}/>
        </div>

        <div className="mt-4">
          <Checkbox isChecked={isInterested} onToggle={onToggleInterest}
          />
        </div>

      </Accordion.Body>
    </>
  );
};

export default StyledItem;