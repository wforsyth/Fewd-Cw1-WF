import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useFetchData from './useFetchData';  
import StyledItem from './StyledTalk';      

const TalkList = () => {
  const { status, talks } = useFetchData();  

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Failed to load talks. Please try again later.</div>;
  }

  return (
    <div>
      <h1>Talk List</h1>
      <Accordion>
        {talks.map((talk, index) => (
          <Accordion.Item eventKey={index} key={talk._id}>
            <StyledItem item={talk} index={index} /> 
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default TalkList;