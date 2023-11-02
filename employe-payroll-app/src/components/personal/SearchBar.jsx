import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
export default function SearchBar({ handleInputChange }) {
  return (
    <div className="form-group  d-flex">
      <AiOutlineSearch size={20} style={{ position: "absolute", left: 25 }} />
      <input
        className="shadow-sm"
        placeholder={"Search"}
        style={{ paddingLeft: "2rem" }}
        onChange={handleInputChange}
      />
    </div>
  );
}
