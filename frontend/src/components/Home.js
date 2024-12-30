import React from "react";
import useFetchData from "./useFetchData";

const Home = () => {
    const {status, talks} = useFetchData();
    if (status==='fetched')
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col"><h3>Welcome!</h3>
        <p>This is the website for the Technology Conference 2024.</p>
        <p>This webpage provides useful information about the conference such as  guest speakers, talk information, times, and sessions!</p>
          <p>Use this website to create your personal itinerary and search for talks you may be interested in.</p>
          <p>We look forward to greeting you! </p> 
         </div>
        </div>
      </div>
    );
  };
  
  export default Home;