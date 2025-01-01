import React, { useState } from "react";
import useFetchData from "./useFetchData";
import "../App.css";

const Home = () => {
    const {status, talks} = useFetchData();
    const [chosenSpeaker, setChosenSpeaker] = useState(null);

    const speakers = [...new Set(talks.map(talk => talk.speaker))]
    const filteredTalks = talks.filter(talk => talk.speaker === chosenSpeaker)

    if (status==='fetched')

    return (
      <div className="container-fluid">
        <div className="row justify-content-center first-row">
          <div className="col-md-8 col-lg-6 py-4">
            <h3 className="welcome-message">Welcome!</h3>
            <p>This is the website for the Technology Conference 2024.</p>
            <p>This webpage provides useful information about the conference such as  guest speakers, talk information, times, and sessions!</p>
            <p>Use this website to create your personal itinerary and search for talks you may be interested in.</p>
            <p>We look forward to greeting you! </p> 
          </div>

          <div className="row justify-content-center second-row">
            <div className="col-md-8 col-lg-6 py-4">
              <h4>Guest Speakers</h4>
              <ul>
                {speakers.map((speaker, index) => (
                  <li
                  key={index}
                  onClick={() => setChosenSpeaker(speaker)}
                  style={{cursor: 'pointer'}}
                  > {speaker}
                  </li>
                ))} 
              </ul>
            </div>
          </div>

          <div className="row justify-content-center second-row">
            <div className="col-md-8 col-lg-6 py-4">
              <h5>Talks by {chosenSpeaker}</h5>
              <ul>
                {filteredTalks.map((talk, index) => ( 
                  <li key={index}>
                    <strong>{talk.title}</strong>
                    <p>{talk.session}</p>
                    <p>{talk.time}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;