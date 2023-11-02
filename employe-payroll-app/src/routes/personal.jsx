import React, { useState } from "react";
import { PageWrapper } from "../components/styles/PageWrapper";
import Title from "../components/utilities/Title";
import PersonalList from "../components/personal/PersonalList";
import data from "../db/personal-data.json";
import PersonalDetails from "../components/personal/PersonalDetails";
export default function Personal() {
  const [personaDetails, setPersonalDetails] = useState(data);
  const [searchPerson, setSearchPerson] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const searchName = (e) => {
    setSearchPerson(e.target.value);
  };

  const filteredNames = data.filter((person) =>
    `${person.first_name} ${person.first_name}`
      .toLowerCase()
      .includes(searchPerson.toLowerCase())
  );
  const displaySelectedPerson = (person) => {
    setSelectedPerson(person);
  };
  return (
    <PageWrapper className="animate-left">
      <Title text="Personal" />
      <div className="d-flex" style={{ gap: 30 }}>
        <PersonalList
          // personal={personaDetails}
          personal={filteredNames}
          searchName={searchName}
          handlePersonClick={displaySelectedPerson}
        />
        {selectedPerson && <PersonalDetails selectedPerson={selectedPerson} />}
      </div>
    </PageWrapper>
  );
}
