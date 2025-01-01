import React from 'react';

const ChosenSpeaker = ({ chosenSpeaker, filteredTalks }) => {
    return (
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 py-4">
          <ul className='list-unstyled'>
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
    );
  };
  
  export default ChosenSpeaker;