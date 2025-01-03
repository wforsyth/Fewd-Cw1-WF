import React, { useState } from "react";
import useFetchData from "./useFetchData";
import ChosenSpeaker from "./ChosenSpeaker";
import GuestSpeakers from "./GuestSpeakers";
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
          <div className="home-text col-md-8 col-lg-6 py-4">
            <h3 className="welcome-message">Welcome!</h3>
            <p>This is the website for the Technology Conference 2024.</p>
            <p>This webpage provides useful information about the conference such as  guest speakers, talk information, times, and sessions!</p>
            <p>Use this website to create your personal itinerary and search for talks you may be interested in.</p>
            <p>We look forward to greeting you! </p> 
          </div>
          <GuestSpeakers speakers={speakers} setChosenSpeaker={setChosenSpeaker} />
        </div>
        <div className="divider my-4"></div>
        <div className="row justify-content-center third-row">
          <div className="col-md-8 col-lg-6">
            <h3>Talks by {chosenSpeaker ? chosenSpeaker: "select a speaker ..."}</h3>
            {chosenSpeaker && (
              <ChosenSpeaker chosenSpeaker={chosenSpeaker} filteredTalks={filteredTalks} />
            )}
          </div>
        </div>
      </div>
      
    );
  };
  
  export default Home;