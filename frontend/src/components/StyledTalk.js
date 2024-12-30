import React from "react";
import Accordion from "react-bootstrap/Accordion";

const StyledItem = ({ item,index }) => {
  return (
    <>
     <Accordion.Header> {item.title}</Accordion.Header>
     <Accordion.Body>
        <p><strong>Speaker:</strong> {item.speaker}</p>
        <p><strong>Description:</strong> {item.description}</p>
        <p><strong>Session:</strong> {item.session}</p>
        <p><strong>Time:</strong> {item.time}</p>
        <p><strong>Tags:</strong> {item.tags.join(", ")}</p>
        <p><strong>Ratings:</strong> {item.ratings.join(", ")}</p>
      </Accordion.Body>
    </>
  );
};

export default StyledItem;