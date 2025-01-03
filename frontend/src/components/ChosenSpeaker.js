import React from 'react';
import Card from 'react-bootstrap/Card';

const ChosenSpeaker = ({ chosenSpeaker, filteredTalks }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 py-4">
        {filteredTalks.map((talk, index) => (
          <Card className="mb-3" key={index}>
            <Card.Body>
              <Card.Title><strong>{talk.title}</strong></Card.Title>
              <Card.Text>
                <strong>Session:</strong> {talk.session}
              </Card.Text>
              <Card.Text>
                <strong>Time:</strong> {talk.time}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChosenSpeaker;