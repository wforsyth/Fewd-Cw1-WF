import React, {useState} from "react";
import StyledItem from "./StyledTalk";
import useFetchData from "./useFetchData";
import Accordion from 'react-bootstrap/Accordion';

function Search(){
    const { status, talks } = useFetchData();  
    const [searchField, setSearchField] = useState("");

    const filteredTalks = talks.filter((talk) => {
        return(
            talk.speaker.toLowerCase().includes(searchField.toLowerCase()) ||
            talk.session.toLowerCase().includes(searchField.toLowerCase())
        );
    });

    if (status === 'loading') {
        return <div>Loading...</div>;
      }
    
      if (status === 'error') {
        return <div>Failed to load talks. Please try again later.</div>;
      }

    return(
        <div className="container py-4">
            <div className="mb-4">
                <input
                className="form-control"
                type="text"
                placeholder="Search by speaker or session ..."
                onChange={(e) => setSearchField(e.target.value)}
                />
            </div>
            <Accordion>
                {filteredTalks.map((talk, index) => (
                <Accordion.Item eventKey={index} key={talk._id}>
                    <StyledItem item={talk} index={index} /> 
                </Accordion.Item>
                ))}
            </Accordion>
        </div>
    )
}

export default Search;