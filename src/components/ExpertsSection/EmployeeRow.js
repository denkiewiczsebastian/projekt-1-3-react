import React from "react";
import "./EmployeeRow.css";

const EmployeeRow = ({
  firstName,
  lastName,
  position,
  description,
  imageSrc,
  index,
}) => {
  const isSecondEmployee = index === 1;

  return (
    <div className={`expert ${isSecondEmployee ? "second-employee" : ""}`}>
      <img
        src={imageSrc}
        alt={`${firstName} ${lastName}`}
        className="expert-img"
      />
      <div
        className={`expert-info ${
          isSecondEmployee ? "second-employee-info" : ""
        }`}
      >
        <h3>
          {`${firstName} ${lastName}`} [{position}]
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EmployeeRow;
