import React from "react";

export default function PersonalDetails({ selectedPerson }) {
  const { first_name, last_name, date_of_birth, yearly_leave_days } =
    selectedPerson;
  return (
    <section>
      <h2 className="alert alert-accept ">
        {first_name} {last_name}
      </h2>
      <div className="card">
        <h2 className="fs-md">Personal details</h2>
        <div className="card-text">
          <p>Date of birth: {date_of_birth}</p>
          <p>Age: {calculateAge(date_of_birth)}</p>
          <p>Total leave days: {yearly_leave_days}</p>
          <p>Requested leave days:</p>
          <p>Remaining leave days:</p>
        </div>
      </div>
    </section>
  );
}

// Utility function

function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
