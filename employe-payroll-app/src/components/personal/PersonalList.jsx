import React from "react";
import styled from "styled-components";
import Button from "../utilities/Button";
import SearchBar from "./SearchBar";
export const PersonalCanvas = styled.div`
  max-height: 356px;
  max-width: 356px;
  overflow-y: scroll;
  overflow-x: hidden;
  box-shadow: 0 3px 15px 2px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 10px;
`;
export const PersonStyle = styled.li`
  cursor: pointer;
  padding: 10px;
  border: 1px solid darkblue;
  border-radius: 10px;
  margin-bottom: 1rem;
  /* box-shadow: 0 3px 15px 2px rgba(0, 0, 0, 0.1); */
  font-weight: 500;
`;
export default function PersonalList({
  personal,
  searchName,
  handlePersonClick,
}) {
  return (
    <section>
      <h2 className="mb-1">Personal List</h2>
      <SearchBar handleInputChange={searchName} />
      <PersonalCanvas className="mb-1">
        <ul>
          {personal.map((person) => (
            <PersonStyle
              className="bg-dark text-light"
              key={person.id}
              onClick={() => handlePersonClick(person)}
            >
              {person.first_name} {person.last_name}
            </PersonStyle>
          ))}
          {/* <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li>
          <li>personal 1</li> */}
        </ul>
      </PersonalCanvas>
      <Button classes={"btn-accept btn-block"} text="Save" />
    </section>
  );
}
