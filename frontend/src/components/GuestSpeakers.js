import React from "react";
import '../App.css';

const GuestSpeakers = ({ speakers, setChosenSpeaker }) => {
  return (
    <div className="row justify-content-center second-row">
      <div className="col-md-8 col-lg-6 py-4 guest-speakers-section">
        <h4 className="title">Guest Speakers</h4>
        <div className="d-flex flex-wrap justify-content-center list-unstyled">
          {speakers.map((speaker, index) => (
            <li
              key={index}
              onClick={() => setChosenSpeaker(speaker)}
              style={{ cursor: "pointer" }}
              className="speaker-item"
            >
              {speaker}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestSpeakers;