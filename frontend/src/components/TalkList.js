import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import StyledItem from './StyledTalk';

const TalkList = () => {
  const [talks, setTalks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the conference data from the backend
    fetch('http://localhost:3001/talks')
      .then((response) => response.json())
      .then((data) => setTalks(data))  // Store the data in state
      .catch((err) => setError('Failed to fetch talks'));
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Accordion>
      {talks.map((talk, index) => (
        <Accordion.Item eventKey={index} key={index}>
          <StyledItem item={talk} index={index} />
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default TalkList;