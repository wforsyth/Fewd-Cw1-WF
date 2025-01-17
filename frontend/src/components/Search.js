import React, { useState } from "react";
import StyledItem from "./StyledTalk";
import useFetchData from "./useFetchData";
import Accordion from 'react-bootstrap/Accordion';
import "../App.css";
import { useLocalStorage } from "./useLocalStorage";

function Search() {
    const { status, talks } = useFetchData();
    const [searchField, setSearchField] = useState("");
    const [interestedTalks, setInterestedTalks] = useLocalStorage('interestedTalks', []);
    const [selectedSession, setSelectedSession] = useState("");
    const sessions = [...new Set(talks.map((talk) => talk.session))];

    const filteredTalks = talks.filter((talk) => {
        return (
            talk.speaker.toLowerCase().includes(searchField.toLowerCase()) &&
            (selectedSession === "" || talk.session === selectedSession)
        );
    });

    const timeConflict = (talkTime) => {
        return interestedTalks.some(talkId => {
            const talk = talks.find(t => t._id === talkId);
            return talk && talk.time === talkTime;
        });
    }

    const toggleInterest = (talk) => {

        if (timeConflict(talk.time)) {
            alert("Cannot have two talks happening at the same time in Personal Schedule")
        } else {
            if (interestedTalks.includes(talk._id)) {
                setInterestedTalks(interestedTalks.filter((t) => t !== talk._id));
            } else {
                setInterestedTalks([...interestedTalks, talk._id])
            }
        }

    }

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'error') {
        return <div>Failed to load talks. Please try again later.</div>;
    }

    return (
        <div className="container-fluid bg-secondary bg-opacity-10">
            <div className="container py-4">
                <div className="mb-4">
                    <h1>Talks</h1>
                    <input className="form-control" type="text" placeholder="Search by speaker ..." onChange={(e) => setSearchField(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <select className="form-select" value={selectedSession} onChange={(e) => setSelectedSession(e.target.value)}>
                        <option value="">All Sessions</option>
                        {sessions.map((session, index) => (
                            <option key={index} value={session}>{session}</option>
                        ))}
                    </select>
                </div>
                <Accordion>
                    {filteredTalks.map((talk, index) => (
                        <Accordion.Item eventKey={index} key={talk._id}>
                            <StyledItem item={talk} index={index} onToggleInterest={() => toggleInterest(talk)} isInterested={interestedTalks.includes(talk._id)} />
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </div>


    )
}

export default Search;