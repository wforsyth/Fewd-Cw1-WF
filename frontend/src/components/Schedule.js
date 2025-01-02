import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useFetchData from './useFetchData';  
import StyledItem from './StyledTalk';  
import { useLocalStorage } from './useLocalStorage';  
import "../App.css";

const Schedule = () => {
    const { status, talks } = useFetchData();
    
    const [interestedTalks, setInterestedTalks] = useLocalStorage('interestedTalks', []);
  
    const toggleInterest = (talk) => {
      if (interestedTalks.includes(talk._id)){
        setInterestedTalks(interestedTalks.filter((t) => t !== talk._id));
      } else{
        setInterestedTalks([...interestedTalks, talk._id])
      }
    }

    const interestedTalkDetails = talks.filter(talk => interestedTalks.includes(talk._id));
  
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
  
    if (status === 'error') {
      return <div>Failed to load talks. Please try again later.</div>;
    }
  
    return (
      <div>
        <h1>Personal Schedule</h1>
        <Accordion>
          {interestedTalkDetails.map((talk, index) => (
            <Accordion.Item eventKey={index} key={talk._id}>
              <StyledItem item={talk} index={index} onToggleInterest={() => toggleInterest(talk)} isInterested={interestedTalks.includes(talk._id)} /> 
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    );
  };
  
  export default Schedule;