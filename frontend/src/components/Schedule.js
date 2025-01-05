import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useFetchData from './useFetchData';
import StyledItem from './StyledTalk';
import { useLocalStorage } from './useLocalStorage';

const Schedule = () => {
    const { status, talks } = useFetchData();
    const [interestedTalks, setInterestedTalks] = useLocalStorage('interestedTalks', []);

    const toggleInterest = (talk) => {

        if (interestedTalks.includes(talk._id)) {
            setInterestedTalks(interestedTalks.filter((t) => t !== talk._id));
        } else {
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
        <div className='container-fluid bg-secondary bg-opacity-10'>
            <div className='container py-4'>
                <div className='mb-4'>
                    <div>
                        <h1>Personal Schedule</h1>
                        {interestedTalkDetails.length === 0 ? (
                            <div>
                                You have no talks selected yet!
                            </div>
                        ) : (
                            <Accordion>
                                {interestedTalkDetails.map((talk, index) => (
                                    <Accordion.Item eventKey={index} key={talk._id}>
                                        <StyledItem item={talk} index={index} onToggleInterest={() => toggleInterest(talk)} isInterested={interestedTalks.includes(talk._id)} />
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;